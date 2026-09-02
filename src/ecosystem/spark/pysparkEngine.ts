export const PYSPARK_PYTHON_SETUP = `
import sys
import types
import re
import json

class DataType:
    def __repr__(self):
        return self.__class__.__name__

class StringType(DataType): pass
class IntegerType(DataType): pass
class LongType(DataType): pass
class DoubleType(DataType): pass
class FloatType(DataType): pass
class BooleanType(DataType): pass
class TimestampType(DataType): pass
class DateType(DataType): pass

class StructField:
    def __init__(self, name, dataType, nullable=True, metadata=None):
        self.name = name
        self.dataType = dataType
        self.nullable = nullable
        self.metadata = metadata or {}

    def __repr__(self):
        return f"StructField('{self.name}', {self.dataType}, {self.nullable})"

class StructType(DataType):
    def __init__(self, fields=None):
        self.fields = fields or []

    def __repr__(self):
        fields_str = ", ".join(repr(f) for f in self.fields)
        return f"StructType([{fields_str}])"

class ArrayType(DataType):
    def __init__(self, elementType, containsNull=True):
        self.elementType = elementType
        self.containsNull = containsNull

class MapType(DataType):
    def __init__(self, keyType, valueType, valueContainsNull=True):
        self.keyType = keyType
        self.valueType = valueType

class Column:
    def __init__(self, name, expr=None):
        self.name = name
        self.expr = expr or name

    def __gt__(self, other): return Column(f"({self.expr} > {other})")
    def __lt__(self, other): return Column(f"({self.expr} < {other})")
    def __ge__(self, other): return Column(f"({self.expr} >= {other})")
    def __le__(self, other): return Column(f"({self.expr} <= {other})")
    def __eq__(self, other): return Column(f"({self.expr} == {other})")
    def __ne__(self, other): return Column(f"({self.expr} != {other})")
    def __add__(self, other): return Column(f"({self.expr} + {other})")
    def __sub__(self, other): return Column(f"({self.expr} - {other})")
    def __mul__(self, other): return Column(f"({self.expr} * {other})")
    def __truediv__(self, other): return Column(f"({self.expr} / {other})")
    def alias(self, new_name): return Column(new_name, self.expr)
    def asc(self): return self
    def desc(self): return Column(f"{self.expr} DESC")

class Functions:
    @staticmethod
    def col(name): return Column(name)
    @staticmethod
    def lit(val): return Column(repr(val))
    @staticmethod
    def sum(col): return Column(f"SUM({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def avg(col): return Column(f"AVG({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def min(col): return Column(f"MIN({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def max(col): return Column(f"MAX({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def count(col="*"): return Column(f"COUNT({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def lower(col): return Column(f"LOWER({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def upper(col): return Column(f"UPPER({col.name if isinstance(col, Column) else col})")
    @staticmethod
    def concat(*cols): return Column(f"CONCAT({', '.join(c.name if isinstance(c, Column) else c for c in cols)})")

class RDD:
    def __init__(self, data, sc=None):
        self._data = list(data)
        self.sc = sc

    def map(self, f): return RDD([f(x) for x in self._data], self.sc)
    def filter(self, f): return RDD([x for x in self._data if f(x)], self.sc)
    def flatMap(self, f):
        res = []
        for x in self._data:
            res.extend(f(x))
        return RDD(res, self.sc)
    def reduce(self, f):
        if not self._data: raise ValueError("Can't reduce empty RDD")
        acc = self._data[0]
        for x in self._data[1:]:
            acc = f(acc, x)
        return acc
    def collect(self): return list(self._data)
    def count(self): return len(self._data)
    def first(self): return self._data[0] if self._data else None
    def take(self, n): return self._data[:n]
    def distinct(self): return RDD(list(set(self._data)), self.sc)
    def sortBy(self, keyfunc, ascending=True):
        return RDD(sorted(self._data, key=keyfunc, reverse=not ascending), self.sc)
    def reduceByKey(self, f):
        d = {}
        for k, v in self._data:
            d[k] = f(d[k], v) if k in d else v
        return RDD(list(d.items()), self.sc)
    def groupByKey(self):
        d = {}
        for k, v in self._data:
            d.setdefault(k, []).append(v)
        return RDD(list(d.items()), self.sc)

class SparkContext:
    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
    def parallelize(self, data, numSlices=None):
        return RDD(data, self)

class GroupedData:
    def __init__(self, df, group_cols):
        self.df = df
        self.group_cols = [c if isinstance(c, str) else c.name for c in group_cols]

    def count(self):
        return self._aggregate('count')
    def sum(self, *cols):
        return self._aggregate('sum', cols)
    def avg(self, *cols):
        return self._aggregate('avg', cols)
    def max(self, *cols):
        return self._aggregate('max', cols)
    def min(self, *cols):
        return self._aggregate('min', cols)

    def _aggregate(self, func, target_cols=None):
        groups = {}
        for row in self.df._rows:
            key = tuple(row.get(c) for c in self.group_cols)
            groups.setdefault(key, []).append(row)

        res_columns = list(self.group_cols)
        if func == 'count':
            res_columns.append('count')
        elif target_cols:
            for c in target_cols:
                res_columns.append(f"{func}({c})")

        res_rows = []
        for key, g_rows in groups.items():
            r_dict = dict(zip(self.group_cols, key))
            if func == 'count':
                r_dict['count'] = len(g_rows)
            elif target_cols:
                for c in target_cols:
                    vals = [r.get(c) for r in g_rows if r.get(c) is not None]
                    if func == 'sum': r_dict[f"sum({c})"] = sum(vals)
                    elif func == 'avg': r_dict[f"avg({c})"] = sum(vals)/len(vals) if vals else 0
                    elif func == 'max': r_dict[f"max({c})"] = max(vals) if vals else None
                    elif func == 'min': r_dict[f"min({c})"] = min(vals) if vals else None
            res_rows.append(r_dict)

        return DataFrame(res_rows, res_columns, self.df._spark)

class DataFrame:
    def __init__(self, rows, columns, spark=None):
        self._spark = spark
        self.columns = list(columns)
        self._rows = []
        for r in rows:
            if isinstance(r, dict):
                self._rows.append(r)
            elif isinstance(r, (list, tuple)):
                self._rows.append(dict(zip(self.columns, r)))
            else:
                self._rows.append({self.columns[0] if self.columns else 'value': r})

    def show(self, n=20, truncate=True):
        display_rows = self._rows[:n]
        if not display_rows and not self.columns:
            print("++\\n||\\n++\\n++")
            return

        cols = self.columns
        col_widths = {c: len(str(c)) for c in cols}
        for r in display_rows:
            for c in cols:
                val_str = str(r.get(c, 'null'))
                if truncate and len(val_str) > 20:
                    val_str = val_str[:17] + '...'
                col_widths[c] = max(col_widths[c], len(val_str))

        sep = "+" + "+".join("-" * (col_widths[c] + 2) for c in cols) + "+"
        header = "|" + "|".join(f" {c.ljust(col_widths[c])} " for c in cols) + "|"

        print(sep)
        print(header)
        print(sep)
        for r in display_rows:
            row_str = "|" + "|".join(f" {str(r.get(c, 'null')).ljust(col_widths[c])} " for c in cols) + "|"
            print(row_str)
        print(sep)

    def printSchema(self):
        print("root")
        for c in self.columns:
            sample_val = self._rows[0].get(c) if self._rows else None
            t_name = "string"
            if isinstance(sample_val, int): t_name = "integer"
            elif isinstance(sample_val, float): t_name = "double"
            elif isinstance(sample_val, bool): t_name = "boolean"
            print(f" |-- {c}: {t_name} (nullable = true)")

    def count(self): return len(self._rows)
    def collect(self): return self._rows
    def first(self): return self._rows[0] if self._rows else None
    def take(self, n): return self._rows[:n]
    def head(self, n=1): return self._rows[:n]
    def limit(self, n): return DataFrame(self._rows[:n], self.columns, self._spark)

    def select(self, *cols):
        col_names = []
        for c in cols:
            if isinstance(c, Column): col_names.append(c.name)
            elif isinstance(c, str): col_names.append(c)
        new_rows = [{c: r.get(c) for c in col_names if c in r} for r in self._rows]
        return DataFrame(new_rows, col_names, self._spark)

    def filter(self, condition):
        if isinstance(condition, Column):
            expr = condition.expr
            m = re.match(r'\\((.+?)\\s*(>|<|>=|<=|==|!=)\\s*(.+)\\)', expr)
            if m:
                c_name, op, val = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
                try: val_eval = eval(val)
                except: val_eval = val
                filtered = []
                for r in self._rows:
                    rv = r.get(c_name)
                    if rv is not None:
                        if op == '>' and rv > val_eval: filtered.append(r)
                        elif op == '<' and rv < val_eval: filtered.append(r)
                        elif op == '>=' and rv >= val_eval: filtered.append(r)
                        elif op == '<=' and rv <= val_eval: filtered.append(r)
                        elif op == '==' and rv == val_eval: filtered.append(r)
                        elif op == '!=' and rv != val_eval: filtered.append(r)
                return DataFrame(filtered, self.columns, self._spark)
        elif callable(condition):
            return DataFrame([r for r in self._rows if condition(r)], self.columns, self._spark)
        return self

    def where(self, condition): return self.filter(condition)

    def withColumn(self, colName, col):
        new_columns = list(self.columns)
        if colName not in new_columns: new_columns.append(colName)
        new_rows = []
        for r in self._rows:
            nr = dict(r)
            if isinstance(col, Column):
                nr[colName] = eval(col.expr, {}, nr) if col.expr in nr else col.expr
            else:
                nr[colName] = col
            new_rows.append(nr)
        return DataFrame(new_rows, new_columns, self._spark)

    def withColumnRenamed(self, existing, new):
        new_cols = [new if c == existing else c for c in self.columns]
        new_rows = [{new if k == existing else k: v for k, v in r.items()} for r in self._rows]
        return DataFrame(new_rows, new_cols, self._spark)

    def drop(self, *cols):
        drop_set = set(cols)
        new_cols = [c for c in self.columns if c not in drop_set]
        new_rows = [{k: v for k, v in r.items() if k not in drop_set} for r in self._rows]
        return DataFrame(new_rows, new_cols, self._spark)

    def groupBy(self, *cols):
        return GroupedData(self, cols)
    def groupby(self, *cols): return self.groupBy(*cols)

    def sort(self, *cols, **kwargs):
        ascending = kwargs.get('ascending', True)
        col_name = cols[0].name if isinstance(cols[0], Column) else cols[0]
        sorted_rows = sorted(self._rows, key=lambda r: r.get(col_name, ''), reverse=not ascending)
        return DataFrame(sorted_rows, self.columns, self._spark)
    def orderBy(self, *cols, **kwargs): return self.sort(*cols, **kwargs)

    def createOrReplaceTempView(self, name):
        if self._spark:
            self._spark._views[name] = self
    def createTempView(self, name): self.createOrReplaceTempView(name)

class DataFrameReader:
    def __init__(self, spark): self.spark = spark

    def _read_content(self, path):
        basename = path.split('/')[-1]
        candidates = [
            path,
            basename,
            f"/home/Hacker/{basename}",
            f"/Hacker/{basename}",
            f"./{basename}"
        ]
        for p in candidates:
            try:
                with open(p, 'r') as f:
                    return f.read()
            except:
                pass
        return None

    def csv(self, path, header=True, inferSchema=True):
        content = self._read_content(path)
        if not content: return DataFrame([], [], self.spark)
        lines = [l.strip() for l in content.splitlines() if l.strip()]
        if not lines: return DataFrame([], [], self.spark)
        delimiter = '\\t' if '\\t' in lines[0] else ','
        first = [c.strip('"\\' ') for c in lines[0].split(delimiter)]
        if header:
            cols = first
            rows_data = lines[1:]
        else:
            cols = [f"_c{i}" for i in range(len(first))]
            rows_data = lines
        parsed_rows = []
        for line in rows_data:
            parts = [p.strip('"\\' ') for p in line.split(delimiter)]
            r_dict = {}
            for i, c in enumerate(cols):
                val = parts[i] if i < len(parts) else None
                if inferSchema and val is not None:
                    if str(val).isdigit(): val = int(val)
                    else:
                        try: val = float(val)
                        except ValueError: pass
                r_dict[c] = val
            parsed_rows.append(r_dict)
        return DataFrame(parsed_rows, cols, self.spark)

    def json(self, path):
        content = self._read_content(path)
        if not content: return DataFrame([], [], self.spark)
        try:
            data = json.loads(content)
            if isinstance(data, dict): data = [data]
            cols = list(data[0].keys()) if data else []
            return DataFrame(data, cols, self.spark)
        except Exception as e:
            print(f"Error reading JSON '{path}': {e}")
            return DataFrame([], [], self.spark)

class SparkSession:
    class Builder:
        def __init__(self):
            self._appName = "PySparkApp"
            self._master = "local[*]"

        def appName(self, name):
            self._appName = name
            return self

        def master(self, m):
            self._master = m
            return self

        def config(self, key=None, value=None):
            return self

        def getOrCreate(self):
            return SparkSession(self._appName, self._master)

    builder = Builder()

    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
        self.version = "3.4.1"
        self.sparkContext = SparkContext(appName, master)
        self.read = DataFrameReader(self)
        self._views = {}

    def createDataFrame(self, data, schema=None):
        if isinstance(schema, list):
            columns = schema
        elif isinstance(schema, StructType):
            columns = [f.name for f in schema.fields]
        elif schema is None and data:
            if isinstance(data[0], dict):
                columns = list(data[0].keys())
            elif isinstance(data[0], (list, tuple)):
                columns = [f"_c{i}" for i in range(len(data[0]))]
            else:
                columns = ["value"]
        else:
            columns = ["value"]

        return DataFrame(data, columns, self)

    def sql(self, query):
        m = re.search(r'FROM\\s+([a-zA-Z0-9_]+)', query, re.I)
        if m:
            v_name = m.group(1)
            if v_name in self._views:
                return self._views[v_name]
        return DataFrame([], [], self)

# Create mock pyspark package modules in sys.modules
pyspark_mod = types.ModuleType("pyspark")
pyspark_sql = types.ModuleType("pyspark.sql")
pyspark_sql_functions = types.ModuleType("pyspark.sql.functions")
pyspark_sql_types = types.ModuleType("pyspark.sql.types")
pyspark_context = types.ModuleType("pyspark.context")

pyspark_sql.SparkSession = SparkSession
pyspark_sql.DataFrame = DataFrame
pyspark_sql.GroupedData = GroupedData

pyspark_sql_functions.col = Functions.col
pyspark_sql_functions.lit = Functions.lit
pyspark_sql_functions.sum = Functions.sum
pyspark_sql_functions.avg = Functions.avg
pyspark_sql_functions.min = Functions.min
pyspark_sql_functions.max = Functions.max
pyspark_sql_functions.count = Functions.count
pyspark_sql_functions.lower = Functions.lower
pyspark_sql_functions.upper = Functions.upper
pyspark_sql_functions.concat = Functions.concat

pyspark_sql_types.DataType = DataType
pyspark_sql_types.StringType = StringType
pyspark_sql_types.IntegerType = IntegerType
pyspark_sql_types.LongType = LongType
pyspark_sql_types.DoubleType = DoubleType
pyspark_sql_types.FloatType = FloatType
pyspark_sql_types.BooleanType = BooleanType
pyspark_sql_types.TimestampType = TimestampType
pyspark_sql_types.DateType = DateType
pyspark_sql_types.StructType = StructType
pyspark_sql_types.StructField = StructField
pyspark_sql_types.ArrayType = ArrayType
pyspark_sql_types.MapType = MapType

pyspark_context.SparkContext = SparkContext
pyspark_mod.SparkContext = SparkContext

sys.modules['pyspark'] = pyspark_mod
sys.modules['pyspark.sql'] = pyspark_sql
sys.modules['pyspark.sql.functions'] = pyspark_sql_functions
sys.modules['pyspark.sql.types'] = pyspark_sql_types
sys.modules['pyspark.context'] = pyspark_context
`;
