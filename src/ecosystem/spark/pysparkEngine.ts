export const PYSPARK_PYTHON_SETUP = `
import sys
import types
import re
import json
import os
import math
import hashlib
import datetime
import random
import uuid as uuid_module

class DataType:
    def __repr__(self):
        return self.__class__.__name__

class StringType(DataType): pass
class IntegerType(DataType): pass
class LongType(DataType): pass
class DoubleType(DataType): pass
class FloatType(DataType): pass
class ByteType(DataType): pass
class ShortType(DataType): pass
class BinaryType(DataType): pass
class NullType(DataType): pass
class DecimalType(DataType):
    def __init__(self, precision=10, scale=0): self.precision = precision; self.scale = scale
    def __repr__(self): return f"DecimalType({self.precision}, {self.scale})"
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
    def add(self, field, data_type=None, nullable=True, metadata=None):
        self.fields.append(field if isinstance(field, StructField) else StructField(field, data_type, nullable, metadata))
        return self
    def fieldNames(self): return [field.name for field in self.fields]
    def __iter__(self): return iter(self.fields)
    def __len__(self): return len(self.fields)

class ArrayType(DataType):
    def __init__(self, elementType, containsNull=True):
        self.elementType = elementType
        self.containsNull = containsNull

class MapType(DataType):
    def __init__(self, keyType, valueType, valueContainsNull=True):
        self.keyType = keyType
        self.valueType = valueType

class Row(dict):
    """Small dict-backed equivalent of pyspark.sql.Row."""
    def __init__(self, *args, **kwargs):
        if len(args) == 1 and isinstance(args[0], dict):
            super().__init__(args[0])
        elif len(args) == 1 and not kwargs:
            try: super().__init__(dict(args[0]))
            except (TypeError, ValueError): super().__init__({str(i): v for i, v in enumerate(args[0])})
        elif args:
            super().__init__({str(i): v for i, v in enumerate(args)})
        else:
            super().__init__(kwargs)
    def __getattr__(self, name):
        try: return self[name]
        except KeyError: raise AttributeError(name)
    def __getstate__(self): return dict(self)
    def __repr__(self): return "Row(" + ", ".join(f"{k}={v!r}" for k, v in self.items()) + ")"

def _row_factory(*fields):
    if fields and all(isinstance(f, str) for f in fields):
        return lambda *values: Row(zip(fields, values))
    return Row(*fields)

class Column:
    def __init__(self, name, expr=None, evaluator=None):
        self.name = name
        self.expr = expr or name
        self._evaluator = evaluator

    def evaluate(self, row):
        if self._evaluator: return self._evaluator(row)
        return row.get(self.name)

    def _binary(self, other, symbol, operation):
        right = other if isinstance(other, Column) else Functions.lit(other)
        return Column(f"{self.expr} {symbol} {right.expr}", f"({self.expr} {symbol} {right.expr})", lambda row: operation(self.evaluate(row), right.evaluate(row)))

    def __gt__(self, other): return self._binary(other, '>', lambda a, b: a is not None and b is not None and a > b)
    def __lt__(self, other): return self._binary(other, '<', lambda a, b: a is not None and b is not None and a < b)
    def __ge__(self, other): return self._binary(other, '>=', lambda a, b: a is not None and b is not None and a >= b)
    def __le__(self, other): return self._binary(other, '<=', lambda a, b: a is not None and b is not None and a <= b)
    def __eq__(self, other): return self._binary(other, '==', lambda a, b: a == b)
    def __ne__(self, other): return self._binary(other, '!=', lambda a, b: a != b)
    def __add__(self, other): return self._binary(other, '+', lambda a, b: a + b)
    def __sub__(self, other): return self._binary(other, '-', lambda a, b: a - b)
    def __mul__(self, other): return self._binary(other, '*', lambda a, b: a * b)
    def __truediv__(self, other): return self._binary(other, '/', lambda a, b: a / b)
    def __floordiv__(self, other): return self._binary(other, '//', lambda a, b: a // b)
    def __mod__(self, other): return self._binary(other, '%', lambda a, b: a % b)
    def __pow__(self, other): return self._binary(other, '**', lambda a, b: a ** b)
    def __and__(self, other): return self._binary(other, 'AND', lambda a, b: bool(a) and bool(b))
    def __or__(self, other): return self._binary(other, 'OR', lambda a, b: bool(a) or bool(b))
    def __invert__(self): return Column(self.name, f"NOT ({self.expr})", lambda row: not self.evaluate(row))
    def alias(self, new_name): return Column(new_name, self.expr, self._evaluator)
    def cast(self, dataType): return Column(self.name, f"CAST({self.expr} AS {dataType})", self._evaluator)
    def isNull(self): return Column(self.name, f"({self.expr} IS NULL)", lambda row: self.evaluate(row) is None)
    def isNotNull(self): return Column(self.name, f"({self.expr} IS NOT NULL)", lambda row: self.evaluate(row) is not None)
    def isin(self, *values):
        if len(values) == 1 and isinstance(values[0], (list, tuple, set)): values = tuple(values[0])
        return Column(self.name, f"({self.expr} IN {repr(tuple(values))})", lambda row: self.evaluate(row) in values)
    def between(self, lower, upper): return (self >= lower) & (self <= upper)
    def contains(self, value): return Column(self.name, f"CONTAINS({self.expr}, {value!r})")
    def startswith(self, value): return Column(self.name, f"STARTSWITH({self.expr}, {value!r})")
    def endswith(self, value): return Column(self.name, f"ENDSWITH({self.expr}, {value!r})")
    def asc(self): return Column(self.name, f"{self.expr} ASC")
    def desc(self): return Column(self.name, f"{self.expr} DESC", self._evaluator)
    def asc_nulls_first(self): return self.asc()
    def asc_nulls_last(self): return self.asc()
    def desc_nulls_first(self): return self.desc()
    def desc_nulls_last(self): return self.desc()

    def otherwise(self, value):
        self._otherwise = value
        condition = getattr(self, '_when_condition', None)
        yes_value = getattr(self, '_when_value', None)
        if condition is not None:
            no_value = value if isinstance(value, Column) else Functions.lit(value)
            yes_value = yes_value if isinstance(yes_value, Column) else Functions.lit(yes_value)
            self._evaluator = lambda row: yes_value.evaluate(row) if condition.evaluate(row) else no_value.evaluate(row)
        return self

class Functions:
    @staticmethod
    def col(name): return Column(name)
    column = col
    @staticmethod
    def lit(val): return Column(repr(val), repr(val), lambda row: val)
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
    def countDistinct(*cols): return Column(f"COUNT(DISTINCT {', '.join(c.name if isinstance(c, Column) else c for c in cols)})")
    @staticmethod
    def approx_count_distinct(col, rsd=0.05): return Functions.countDistinct(col)
    @staticmethod
    def first(col, ignorenulls=False): return Column(f"FIRST({getattr(col, 'name', col)})")
    @staticmethod
    def last(col, ignorenulls=False): return Column(f"LAST({getattr(col, 'name', col)})")
    @staticmethod
    def collect_list(col): return Column(f"COLLECT_LIST({getattr(col, 'name', col)})")
    @staticmethod
    def collect_set(col): return Column(f"COLLECT_SET({getattr(col, 'name', col)})")
    @staticmethod
    def lower(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"LOWER({source.name})", f"LOWER({source.expr})", lambda row: str(source.evaluate(row)).lower() if source.evaluate(row) is not None else None)
    @staticmethod
    def upper(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"UPPER({source.name})", f"UPPER({source.expr})", lambda row: str(source.evaluate(row)).upper() if source.evaluate(row) is not None else None)
    @staticmethod
    def concat(*cols): return Column(f"CONCAT({', '.join(c.name if isinstance(c, Column) else c for c in cols)})")
    @staticmethod
    def concat_ws(sep, *cols): return Column(f"CONCAT_WS({sep!r}, {', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def coalesce(*cols): return Column(f"COALESCE({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def abs(col): return Column(f"ABS({getattr(col, 'name', col)})")
    @staticmethod
    def round(col, scale=0): return Column(f"ROUND({getattr(col, 'name', col)}, {scale})")
    @staticmethod
    def ceil(col): return Column(f"CEIL({getattr(col, 'name', col)})")
    @staticmethod
    def floor(col): return Column(f"FLOOR({getattr(col, 'name', col)})")
    @staticmethod
    def sqrt(col): return Column(f"SQRT({getattr(col, 'name', col)})")
    @staticmethod
    def length(col): return Column(f"LENGTH({getattr(col, 'name', col)})")
    @staticmethod
    def substring(col, pos, length): return Column(f"SUBSTRING({getattr(col, 'name', col)}, {pos}, {length})")
    @staticmethod
    def regexp_replace(col, pattern, replacement): return Column(f"REGEXP_REPLACE({getattr(col, 'name', col)}, {pattern!r}, {replacement!r})")
    @staticmethod
    def when(condition, value):
        result = Column(getattr(condition, 'name', ''), f"CASE WHEN {getattr(condition, 'expr', condition)} THEN {value!r}")
        result._when_condition = condition if isinstance(condition, Column) else Functions.lit(bool(condition))
        result._when_value = value
        return result
    @staticmethod
    def expr(expression): return Column(expression, expression)
    @staticmethod
    def array(*cols): return Column(f"ARRAY({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def struct(*cols): return Column(f"STRUCT({', '.join(getattr(c, 'name', c) for c in cols)})")
    @staticmethod
    def monotonically_increasing_id(): return Column("monotonically_increasing_id()")
    @staticmethod
    def current_timestamp(): return Column("current_timestamp()")
    @staticmethod
    def current_date(): return Column("current_date()")
    @staticmethod
    def udf(function=None, returnType=None):
        if function is None: return lambda actual_function: Functions.udf(actual_function, returnType)
        def apply_udf(*args):
            if len(args) == 1 and isinstance(args[0], Column):
                source = args[0]
                return Column(f"{getattr(function, '__name__', 'udf')}({source.name})", evaluator=lambda row: function(source.evaluate(row)))
            return function(*args)
        return apply_udf
    pandas_udf = udf
    @staticmethod
    def isnan(col):
        source = col if isinstance(col, Column) else Functions.col(col)
        return Column(f"isnan({source.name})", evaluator=lambda row: isinstance(source.evaluate(row), float) and source.evaluate(row) != source.evaluate(row))
    @staticmethod
    def greatest(*cols):
        sources = [c if isinstance(c, Column) else Functions.col(c) for c in cols]
        return Column("greatest(" + ', '.join(c.name for c in sources) + ")", evaluator=lambda row: max((c.evaluate(row) for c in sources if c.evaluate(row) is not None), default=None))
    @staticmethod
    def least(*cols):
        sources = [c if isinstance(c, Column) else Functions.col(c) for c in cols]
        return Column("least(" + ', '.join(c.name for c in sources) + ")", evaluator=lambda row: min((c.evaluate(row) for c in sources if c.evaluate(row) is not None), default=None))

# A wide, import-compatible Spark SQL function catalog. These functions execute
# against local rows in Pyodide; they do not dispatch to a Spark JVM.
_SPARK_SQL_FUNCTION_NAMES = '''
acos asin atan atan2 cbrt cos cosh cot degrees exp factorial hypot log log10 log1p log2 pi radians rand randn rint signum sin sinh tan tanh try_add try_divide try_multiply try_subtract uuid current_user user spark_partition_id input_file_name
upper lower initcap length char_length character_length bit_length octet_length trim ltrim rtrim btrim reverse ascii chr soundex instr locate position substring substr substring_index split concat_ws format_string printf regexp_extract regexp_extract_all regexp_replace regexp_like replace translate overlay lpad rpad repeat space startswith endswith contains levenshtein left right
array_contains array_distinct array_intersect array_except array_union array_compact array_join array_max array_min array_position array_remove array_sort array_insert array_prepend array_append array_repeat arrays_overlap arrays_zip flatten sequence shuffle slice sort_array size cardinality element_at try_element_at map_contains_key map_entries map_from_arrays map_from_entries map_keys map_values map_concat map_filter map_zip_with transform transform_keys transform_values zip_with exists forall
year quarter month day dayofmonth dayofweek dayofyear weekofyear hour minute second make_date make_timestamp to_date to_timestamp try_to_date date_format date_add date_sub datediff months_between add_months last_day next_day trunc date_trunc from_unixtime unix_timestamp to_unix_timestamp timestamp_seconds timestamp_millis timestamp_micros current_timezone convert_timezone localtimestamp now current_timestamp current_date
isnan isnull isnotnull nvl nvl2 nullif nanvl ifnull iff decode greatest least coalesce
md5 sha1 sha2 crc32 xxhash64 hash base64 unbase64 hex unhex soundex
to_json from_json get_json_object json_tuple schema_of_json
assert_true raise_error typeof version
row_number rank dense_rank percent_rank cume_dist ntile lag lead first_value last_value nth_value
sum_distinct avg_distinct every bool_and bool_or bit_and bit_or bit_xor corr covar_pop covar_samp kurtosis skewness stddev stddev_pop stddev_samp variance var_pop var_samp percentile percentile_approx approx_percentile approx_count_distinct
'''.split()

def _spark_local_value(value, row):
    if isinstance(value, Column): return value.evaluate(row)
    if isinstance(value, str) and value in row: return row.get(value)
    return value

def _spark_local_function(name, arguments, row):
    values = [_spark_local_value(arg, row) for arg in arguments]
    first = values[0] if values else None
    if name in ('upper',): return str(first).upper() if first is not None else None
    if name in ('lower',): return str(first).lower() if first is not None else None
    if name == 'initcap': return str(first).title() if first is not None else None
    if name in ('length', 'char_length', 'character_length', 'size', 'cardinality'): return len(first) if first is not None else None
    if name == 'bit_length': return len(str(first).encode()) * 8 if first is not None else None
    if name == 'octet_length': return len(str(first).encode()) if first is not None else None
    if name in ('trim', 'btrim'): return str(first).strip() if first is not None else None
    if name == 'ltrim': return str(first).lstrip() if first is not None else None
    if name == 'rtrim': return str(first).rstrip() if first is not None else None
    if name == 'reverse': return first[::-1] if first is not None else None
    if name == 'ascii': return ord(str(first)[0]) if first else None
    if name == 'chr': return chr(int(first)) if first is not None else None
    if name == 'concat': return ''.join('' if v is None else str(v) for v in values)
    if name == 'concat_ws': return str(values[0]).join(str(v) for v in values[1:] if v is not None) if values else None
    if name in ('substring', 'substr'):
        if first is None: return None
        start = max(0, int(values[1] or 1) - 1)
        return str(first)[start:] if len(values) < 3 or values[2] is None else str(first)[start:start + int(values[2])]
    if name == 'substring_index':
        bits = str(first).split(str(values[1])); count = int(values[2])
        return str(values[1]).join(bits[:count]) if count >= 0 else str(values[1]).join(bits[count:])
    if name == 'split': return re.split(str(values[1]), str(first))
    if name == 'replace': return str(first).replace(str(values[1]), str(values[2]))
    if name == 'translate': return str.maketrans(str(values[1]), str(values[2])) and str(first).translate(str.maketrans(str(values[1]), str(values[2])))
    if name == 'lpad': return str(first).rjust(int(values[1]), str(values[2]) if len(values) > 2 else ' ')
    if name == 'rpad': return str(first).ljust(int(values[1]), str(values[2]) if len(values) > 2 else ' ')
    if name == 'repeat': return str(first) * int(values[1])
    if name == 'space': return ' ' * int(first)
    if name == 'left': return str(first)[:int(values[1])]
    if name == 'right': return str(first)[-int(values[1]):]
    if name == 'instr': return str(first).find(str(values[1])) + 1
    if name == 'locate': return str(values[1]).find(str(first), max(0, int(values[2]) - 1) if len(values) > 2 else 0) + 1
    if name in ('startswith', 'endswith', 'contains'):
        if first is None: return None
        target = str(values[1])
        return first.startswith(target) if name == 'startswith' else first.endswith(target) if name == 'endswith' else target in first
    if name == 'levenshtein':
        a, b = str(first), str(values[1]); prev = list(range(len(b) + 1))
        for i, ca in enumerate(a, 1):
            curr = [i]
            for j, cb in enumerate(b, 1): curr.append(min(curr[-1] + 1, prev[j] + 1, prev[j-1] + (ca != cb)))
            prev = curr
        return prev[-1]
    if name in ('abs',): return abs(first)
    if name == 'ceil': return math.ceil(first)
    if name == 'floor': return math.floor(first)
    if name == 'round': return round(first, int(values[1]) if len(values) > 1 else 0)
    if name == 'sqrt': return math.sqrt(first)
    if name == 'pi': return math.pi
    if name == 'rand': return random.random()
    if name == 'randn': return random.gauss(0, 1)
    if name == 'uuid': return str(uuid_module.uuid4())
    if name in ('current_user', 'user'): return 'pyodide'
    if name in ('spark_partition_id', 'input_file_name'): return 0 if name == 'spark_partition_id' else ''
    if name == 'cbrt': return math.copysign(abs(first) ** (1/3), first)
    if name == 'exp': return math.exp(first)
    if name == 'log': return math.log(first, values[1]) if len(values) > 1 else math.log(first)
    if name == 'log10': return math.log10(first)
    if name == 'log2': return math.log2(first)
    if name == 'log1p': return math.log1p(first)
    if name == 'pow': return math.pow(first, values[1])
    if name == 'signum': return (first > 0) - (first < 0) if first is not None else None
    if name in ('acos', 'asin', 'atan', 'cos', 'cosh', 'sin', 'sinh', 'tan', 'tanh'):
        return getattr(math, name)(first)
    if name == 'atan2': return math.atan2(first, values[1])
    if name == 'degrees': return math.degrees(first)
    if name == 'radians': return math.radians(first)
    if name == 'greatest': return max((v for v in values if v is not None), default=None)
    if name == 'least': return min((v for v in values if v is not None), default=None)
    if name == 'coalesce': return next((v for v in values if v is not None), None)
    if name in ('nvl', 'ifnull'): return values[1] if first is None else first
    if name == 'nvl2': return values[1] if first is not None else values[2]
    if name == 'nullif': return None if first == values[1] else first
    if name in ('isnull',): return first is None
    if name in ('isnotnull',): return first is not None
    if name == 'isnan': return isinstance(first, float) and math.isnan(first)
    if name == 'if': return values[1] if first else values[2]
    if name == 'array': return values
    if name == 'struct': return {getattr(arg, 'name', str(index)): value for index, (arg, value) in enumerate(zip(arguments, values))}
    if name == 'array_contains': return values[1] in (first or [])
    if name == 'array_distinct': return list(dict.fromkeys(first or []))
    if name == 'array_intersect': return [v for v in (first or []) if v in (values[1] or [])]
    if name == 'array_except': return [v for v in (first or []) if v not in (values[1] or [])]
    if name == 'array_union': return list(dict.fromkeys((first or []) + (values[1] or [])))
    if name == 'array_compact': return [v for v in (first or []) if v is not None]
    if name == 'array_join': return str(values[1]).join(str(v) for v in (first or []) if v is not None)
    if name in ('array_max', 'array_min'): return (max if name == 'array_max' else min)(first) if first else None
    if name == 'array_position':
        try: return first.index(values[1]) + 1
        except (ValueError, AttributeError): return 0
    if name == 'array_remove': return [v for v in (first or []) if v != values[1]]
    if name in ('array_sort', 'sort_array'): return sorted(first or [], reverse=bool(values[1]) if len(values) > 1 else False)
    if name == 'arrays_overlap': return bool(set(first or []) & set(values[1] or []))
    if name == 'flatten': return [item for sub in (first or []) for item in (sub or [])]
    if name == 'slice': return (first or [])[int(values[1])-1:int(values[1])-1+int(values[2])]
    if name == 'element_at' or name == 'try_element_at': return first[values[1]-1] if isinstance(first, (list, tuple)) and values[1] > 0 else first.get(values[1]) if isinstance(first, dict) else None
    if name == 'map_keys': return list(first.keys()) if first else []
    if name == 'map_values': return list(first.values()) if first else []
    if name == 'map_entries': return list(first.items()) if first else []
    if name == 'map_concat': return {k: v for mapping in values if mapping for k, v in mapping.items()}
    if name in ('to_date', 'to_timestamp'):
        if first is None: return None
        if isinstance(first, (datetime.date, datetime.datetime)): return first
        return datetime.datetime.fromisoformat(str(first).replace('Z', '+00:00'))
    if name in ('year', 'quarter', 'month', 'day', 'dayofmonth', 'dayofweek', 'dayofyear', 'hour', 'minute', 'second'):
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.datetime.fromisoformat(str(first))
        return {'year': lambda: dt.year, 'quarter': lambda: (dt.month-1)//3+1, 'month': lambda: dt.month, 'day': lambda: dt.day, 'dayofmonth': lambda: dt.day, 'dayofweek': lambda: (dt.weekday()+1)%7+1, 'dayofyear': lambda: dt.timetuple().tm_yday, 'hour': lambda: getattr(dt, 'hour', 0), 'minute': lambda: getattr(dt, 'minute', 0), 'second': lambda: getattr(dt, 'second', 0)}[name]()
    if name in ('date_add', 'date_sub'):
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.date.fromisoformat(str(first)[:10])
        return dt + datetime.timedelta(days=int(values[1]) * (1 if name == 'date_add' else -1))
    if name == 'datediff':
        end = first if isinstance(first, datetime.date) else datetime.date.fromisoformat(str(first)[:10]); start = values[1] if isinstance(values[1], datetime.date) else datetime.date.fromisoformat(str(values[1])[:10])
        return (end-start).days
    if name == 'last_day':
        dt = first if isinstance(first, datetime.date) else datetime.date.fromisoformat(str(first)[:10]); next_month = dt.replace(day=28) + datetime.timedelta(days=4)
        return next_month - datetime.timedelta(days=next_month.day)
    if name == 'date_format':
        dt = first if isinstance(first, (datetime.date, datetime.datetime)) else datetime.datetime.fromisoformat(str(first)[:19]); return dt.strftime(str(values[1]))
    if name in ('current_date', 'today'): return datetime.date.today()
    if name in ('current_timestamp', 'now', 'localtimestamp'): return datetime.datetime.now()
    if name == 'from_unixtime': return datetime.datetime.fromtimestamp(float(first)).strftime(str(values[1]) if len(values) > 1 else '%Y-%m-%d %H:%M:%S')
    if name in ('timestamp_seconds', 'timestamp_millis', 'timestamp_micros'):
        divisor = 1 if name == 'timestamp_seconds' else 1000 if name == 'timestamp_millis' else 1000000
        return datetime.datetime.fromtimestamp(float(first) / divisor)
    if name == 'unix_timestamp':
        dt = datetime.datetime.now() if first is None else (first if isinstance(first, datetime.datetime) else datetime.datetime.fromisoformat(str(first)[:19])); return int(dt.timestamp())
    if name in ('md5', 'sha1', 'sha2'):
        bits = int(values[1]) if name == 'sha2' and len(values) > 1 else (256 if name == 'sha2' else None)
        algorithm = 'sha256' if bits == 256 else 'sha224' if bits == 224 else 'sha384' if bits == 384 else 'sha512' if bits == 512 else 'md5' if name == 'md5' else 'sha1'
        return hashlib.new(algorithm, str(first).encode()).hexdigest()
    if name == 'crc32':
        import zlib
        return zlib.crc32(str(first).encode())
    if name == 'hex': return str(first).encode().hex().upper()
    if name == 'unhex': return bytes.fromhex(str(first)).decode(errors='replace')
    if name == 'base64':
        import base64
        return base64.b64encode(str(first).encode()).decode()
    if name == 'unbase64':
        import base64
        return base64.b64decode(str(first)).decode(errors='replace')
    if name == 'regexp_replace': return re.sub(str(values[1]), str(values[2]), str(first))
    if name == 'regexp_extract':
        match = re.search(str(values[1]), str(first)); group = int(values[2]) if len(values) > 2 else 1
        return match.group(group) if match else ''
    if name == 'regexp_like': return bool(re.search(str(values[1]), str(first)))
    if name == 'soundex':
        text = re.sub('[^A-Z]', '', str(first).upper())
        if not text: return ''
        codes = {'BFPV':'1','CGJKQSXZ':'2','DT':'3','L':'4','MN':'5','R':'6'}
        def code(ch): return next((value for chars, value in codes.items() if ch in chars), '0')
        encoded, previous = text[0], code(text[0])
        for ch in text[1:]:
            current = code(ch)
            if current != '0' and current != previous: encoded += current
            previous = current
        return (encoded[:4] + '000')[:4]
    if name == 'format_string': return str(first) % tuple(values[1:])
    if name == 'greatest': return max((v for v in values if v is not None), default=None)
    if name == 'least': return min((v for v in values if v is not None), default=None)
    raise NotImplementedError(f"pyspark.sql.functions.{name} is importable but not implemented by the local Pyodide runtime")

def _make_spark_function(function_name):
    def local_function(*arguments):
        expression = function_name.upper() + '(' + ', '.join(getattr(arg, 'expr', repr(arg)) for arg in arguments) + ')'
        return Column(expression, expression, lambda row: _spark_local_function(function_name, arguments, row))
    local_function.__name__ = function_name
    local_function.__doc__ = f"Local PySpark-compatible {function_name} expression."
    return staticmethod(local_function)

for _function_name in _SPARK_SQL_FUNCTION_NAMES:
    if _function_name not in {'col', 'column', 'lit', 'sum', 'avg', 'min', 'max', 'count', 'countDistinct', 'approx_count_distinct', 'first', 'last', 'collect_list', 'collect_set', 'when', 'expr', 'udf', 'pandas_udf'}:
        setattr(Functions, _function_name, _make_spark_function(_function_name))

class RDD:
    def __init__(self, data, sc=None, num_partitions=1):
        self._data = list(data)
        self.sc = sc
        self._num_partitions = max(1, int(num_partitions or 1))

    def map(self, f): return RDD([f(x) for x in self._data], self.sc, self._num_partitions)
    def filter(self, f): return RDD([x for x in self._data if f(x)], self.sc, self._num_partitions)
    def flatMap(self, f):
        res = []
        for x in self._data:
            res.extend(f(x))
        return RDD(res, self.sc, self._num_partitions)
    def mapPartitions(self, f): return RDD(f(iter(self._data)), self.sc, self._num_partitions)
    def mapPartitionsWithIndex(self, f): return RDD([value for value in f(0, iter(self._data))], self.sc, self._num_partitions)
    def flatMapValues(self, f): return RDD([(k, value) for k, values in self._data for value in f(values)], self.sc, self._num_partitions)
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
    def isEmpty(self): return not self._data
    def distinct(self, numPartitions=None): return RDD(list(dict.fromkeys(self._data)), self.sc, numPartitions or self._num_partitions)
    def sample(self, withReplacement, fraction, seed=None):
        rng = random.Random(seed)
        if withReplacement:
            return RDD([x for x in self._data for _ in range(max(0, int(rng.random() < fraction)))], self.sc, self._num_partitions)
        return RDD([x for x in self._data if rng.random() < fraction], self.sc, self._num_partitions)
    def takeSample(self, withReplacement, num, seed=None):
        rng = random.Random(seed)
        if withReplacement: return [rng.choice(self._data) for _ in range(num)] if self._data else []
        return rng.sample(self._data, min(num, len(self._data)))
    def sum(self): return sum(self._data)
    def mean(self): return self.sum() / len(self._data) if self._data else float('nan')
    def max(self): return max(self._data)
    def min(self): return min(self._data)
    def fold(self, zeroValue, op): return self.aggregate(zeroValue, op, op)
    def aggregate(self, zeroValue, seqOp, combOp):
        result = zeroValue
        for item in self._data: result = seqOp(result, item)
        return result
    def zip(self, other):
        if len(self._data) != len(other._data): raise ValueError('Can only zip RDDs with the same number of elements')
        return RDD(zip(self._data, other._data), self.sc)
    def cartesian(self, other): return RDD(((a, b) for a in self._data for b in other._data), self.sc)
    def sortByKey(self, ascending=True): return self.sortBy(lambda pair: pair[0], ascending)
    def partitionBy(self, numPartitions, partitionFunc=hash): return RDD(self._data, self.sc, numPartitions)
    def cache(self): return self
    def persist(self, *args, **kwargs): return self
    def unpersist(self, *args, **kwargs): return self
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
    def mapValues(self, f): return RDD([(k, f(v)) for k, v in self._data], self.sc)
    def keys(self): return RDD([k for k, _ in self._data], self.sc)
    def values(self): return RDD([v for _, v in self._data], self.sc)
    def union(self, other): return RDD(self._data + other._data, self.sc)
    def takeOrdered(self, n, key=None): return sorted(self._data, key=key)[:n]
    def countByValue(self):
        result = {}
        for value in self._data: result[value] = result.get(value, 0) + 1
        return result
    def foreach(self, f):
        for item in self._data: f(item)
    def getNumPartitions(self): return self._num_partitions

class Broadcast:
    def __init__(self, value): self.value = value
    def unpersist(self, *args, **kwargs): pass
    def destroy(self, *args, **kwargs): pass

class SparkContext:
    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
    def parallelize(self, data, numSlices=None):
        return RDD(data, self, numSlices or 1)
    def emptyRDD(self): return RDD([], self)
    def broadcast(self, value): return Broadcast(value)
    def range(self, start, end=None, step=1, numSlices=None):
        if end is None: start, end = 0, start
        return RDD(range(start, end, step), self)
    def stop(self): pass
    def getConf(self): return SparkConf().setAppName(self.appName).setMaster(self.master)

class SparkConf:
    def __init__(self): self._settings = {}
    def set(self, key, value): self._settings[key] = value; return self
    def setAppName(self, name): return self.set('spark.app.name', name)
    def setMaster(self, master): return self.set('spark.master', master)
    def get(self, key, defaultValue=None): return self._settings.get(key, defaultValue)
    def getAll(self): return list(self._settings.items())

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

    def agg(self, *exprs, **named_exprs):
        expressions = list(exprs) + list(named_exprs.values())
        if not expressions: return self.count()
        groups = {}
        for row in self.df._rows:
            key = tuple(row.get(c) for c in self.group_cols)
            groups.setdefault(key, []).append(row)
        output = []
        output_columns = list(self.group_cols)
        specs = []
        for index, expression in enumerate(expressions):
            text = getattr(expression, 'expr', '')
            match = re.match(r'([A-Z_]+)\(([^)]+)\)', text)
            if not match: continue
            func, source = match.groups()
            output_name = list(named_exprs.keys())[index - len(exprs)] if index >= len(exprs) else getattr(expression, 'name', text)
            output_columns.append(output_name)
            specs.append((func.lower(), source, output_name))
        for key, rows in groups.items():
            result = dict(zip(self.group_cols, key))
            for func, source, output_name in specs:
                values = [r.get(source) for r in rows if r.get(source) is not None]
                if func == 'sum': value = sum(values)
                elif func in ('avg', 'mean'): value = sum(values) / len(values) if values else None
                elif func == 'min': value = min(values) if values else None
                elif func == 'max': value = max(values) if values else None
                elif func == 'count': value = len(values) if source != '*' else len(rows)
                else: continue
                result[output_name] = value
            output.append(result)
        return DataFrame(output, output_columns, self.df._spark)

    def _aggregate_from_expression(self, expression):
        expr = getattr(expression, 'expr', '')
        match = re.match(r'([A-Z_]+)\(([^)]+)\)', expr)
        if not match: return self.df
        func, column = match.groups()
        method = {'SUM': 'sum', 'AVG': 'avg', 'MIN': 'min', 'MAX': 'max', 'COUNT': 'count'}.get(func)
        return self._aggregate(method, [column]) if method else self.df

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
                self._rows.append(Row(r))
            elif isinstance(r, (list, tuple)):
                self._rows.append(dict(zip(self.columns, r)))
            else:
                self._rows.append({self.columns[0] if self.columns else 'value': r})

    def __getattr__(self, name):
        # PySpark supports df.columnName as shorthand for col("columnName").
        columns = self.__dict__.get('columns', ())
        if name in columns:
            return Functions.col(name)
        raise AttributeError(f"'DataFrame' object has no attribute '{name}'")

    def __getitem__(self, item):
        if isinstance(item, str): return Functions.col(item)
        if isinstance(item, Column): return item
        raise TypeError('DataFrame column access expects a column name or Column')

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
    @property
    def schema(self): return StructType([StructField(c, StringType(), True) for c in self.columns])
    @property
    def dtypes(self): return [(c, type(next((r.get(c) for r in self._rows if r.get(c) is not None), '')).__name__) for c in self.columns]
    @property
    def rdd(self): return RDD(self.collect(), self._spark.sparkContext if self._spark else None)
    def isEmpty(self): return not self._rows
    def collect(self): return [Row(r) for r in self._rows]
    def first(self): return self.collect()[0] if self._rows else None
    def take(self, n): return self.collect()[:n]
    def head(self, n=None): return self.first() if n is None else self.take(n)
    def limit(self, n): return DataFrame(self._rows[:n], self.columns, self._spark)
    def randomSplit(self, weights, seed=None):
        total = float(sum(weights))
        if not weights or total <= 0: raise ValueError('weights must be a non-empty sequence of positive values')
        rng = random.Random(seed); buckets = [[] for _ in weights]
        for row in self._rows:
            pick = rng.random() * total; cumulative = 0.0
            for index, weight in enumerate(weights):
                cumulative += weight
                if pick <= cumulative: buckets[index].append(row); break
        return [DataFrame(rows, self.columns, self._spark) for rows in buckets]
    def sample(self, withReplacement, fraction, seed=None):
        return DataFrame(RDD(self._rows, self._spark.sparkContext if self._spark else None).sample(withReplacement, fraction, seed).collect(), self.columns, self._spark)
    def randomSplitByWeights(self, weights, seed=None): return self.randomSplit(weights, seed)

    def select(self, *cols):
        if len(cols) == 1 and isinstance(cols[0], (list, tuple)):
            cols = tuple(cols[0])
        if cols == ('*',): cols = tuple(self.columns)
        col_names = []
        for c in cols:
            if isinstance(c, Column): col_names.append(c.name)
            elif isinstance(c, str): col_names.append(c)
        new_rows = []
        for row in self._rows:
            selected = {}
            for original, name in zip(cols, col_names):
                selected[name] = original.evaluate(row) if isinstance(original, Column) else row.get(name)
            new_rows.append(selected)
        return DataFrame(new_rows, col_names, self._spark)

    def selectExpr(self, *exprs):
        names, rows = [], []
        for expression in exprs:
            parts = re.split(r'\s+AS\s+', expression, flags=re.I)
            source = parts[0].strip()
            names.append(parts[-1].strip() if len(parts) > 1 else source)
        for row in self._rows:
            out = {}
            for expression, name in zip(exprs, names):
                source = re.split(r'\s+AS\s+', expression, flags=re.I)[0].strip()
                out[name] = row.get(source, source)
            rows.append(out)
        return DataFrame(rows, names, self._spark)

    def toDF(self, *columns):
        names = list(columns) if columns else self.columns
        return DataFrame([{new: row.get(old) for old, new in zip(self.columns, names)} for row in self._rows], names, self._spark)

    def agg(self, *exprs, **named_exprs): return GroupedData(self, []).agg(*exprs, **named_exprs)

    def filter(self, condition):
        if isinstance(condition, Column):
            if condition._evaluator:
                return DataFrame([r for r in self._rows if condition.evaluate(r)], self.columns, self._spark)
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
                nr[colName] = col.evaluate(r) if col._evaluator else (eval(col.expr, {}, nr) if col.expr in nr else col.expr)
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

    def distinct(self):
        seen, rows = set(), []
        for row in self._rows:
            key = tuple(row.get(c) for c in self.columns)
            if key not in seen: seen.add(key); rows.append(row)
        return DataFrame(rows, self.columns, self._spark)
    def dropDuplicates(self, subset=None):
        subset = subset or self.columns
        seen, rows = set(), []
        for row in self._rows:
            key = tuple(row.get(c) for c in subset)
            if key not in seen: seen.add(key); rows.append(row)
        return DataFrame(rows, self.columns, self._spark)
    def union(self, other): return DataFrame(self._rows + other._rows, self.columns, self._spark)
    def unionAll(self, other): return self.union(other)
    def unionByName(self, other, allowMissingColumns=False):
        columns = list(dict.fromkeys(self.columns + other.columns)) if allowMissingColumns else self.columns
        return DataFrame([{c: r.get(c) for c in columns} for r in self._rows + other._rows], columns, self._spark)
    def crossJoin(self, other):
        cols = self.columns + [c for c in other.columns if c not in self.columns]
        return DataFrame([{**a, **b} for a in self._rows for b in other._rows], cols, self._spark)
    def join(self, other, on=None, how='inner'):
        keys = [on] if isinstance(on, str) else list(on or [])
        rows = []
        for left in self._rows:
            matched = False
            for right in other._rows:
                if all(left.get(k) == right.get(k) for k in keys):
                    rows.append({**left, **{k: v for k, v in right.items() if k not in keys}}); matched = True
            if not matched and how.lower() in ('left', 'left_outer', 'full', 'full_outer', 'outer'):
                rows.append(dict(left))
        if how.lower() in ('right', 'right_outer', 'full', 'full_outer', 'outer'):
            left_keys = {tuple(r.get(k) for k in keys) for r in self._rows}
            rows.extend({**r, **{k: v for k, v in r.items() if k not in keys}} for r in other._rows if tuple(r.get(k) for k in keys) not in left_keys)
        cols = list(dict.fromkeys(self.columns + [c for c in other.columns if c not in keys]))
        return DataFrame(rows, cols, self._spark)
    def fillna(self, value, subset=None):
        cols = subset or self.columns
        values = value if isinstance(value, dict) else {c: value for c in cols}
        return DataFrame([{**r, **{c: values[c] for c in cols if r.get(c) is None and c in values}} for r in self._rows], self.columns, self._spark)
    def dropna(self, how='any', thresh=None, subset=None):
        cols = subset or self.columns
        min_values = thresh if thresh is not None else (1 if how == 'any' else len(cols))
        return DataFrame([r for r in self._rows if sum(r.get(c) is not None for c in cols) >= min_values], self.columns, self._spark)
    def describe(self, *cols):
        targets = list(cols) or self.columns
        rows = []
        for label, fn in [('count', lambda v: len(v)), ('mean', lambda v: sum(v)/len(v) if v else None), ('stddev', lambda v: (sum((x-sum(v)/len(v))**2 for x in v)/max(1, len(v)-1))**0.5 if v else None), ('min', lambda v: min(v) if v else None), ('max', lambda v: max(v) if v else None)]:
            out = {'summary': label}
            for c in targets:
                vals = [r[c] for r in self._rows if isinstance(r.get(c), (int, float)) and not isinstance(r.get(c), bool)]
                out[c] = str(fn(vals)) if vals else (str(len([r for r in self._rows if r.get(c) is not None])) if label == 'count' else None)
            rows.append(out)
        return DataFrame(rows, ['summary'] + targets, self._spark)
    def cache(self): return self
    def persist(self, *args, **kwargs): return self
    def unpersist(self, *args, **kwargs): return self
    def repartition(self, *args, **kwargs): return self
    def coalesce(self, *args, **kwargs): return self
    def explain(self, *args, **kwargs): print('Local PySpark-compatible DataFrame (in-memory execution)')
    def toLocalIterator(self): return iter(self.collect())
    @property
    def write(self): return DataFrameWriter(self)

    def groupBy(self, *cols):
        return GroupedData(self, cols)
    def groupby(self, *cols): return self.groupBy(*cols)

    def sort(self, *cols, **kwargs):
        ascending = kwargs.get('ascending', True)
        first_col = cols[0]
        col_name = first_col.name if isinstance(first_col, Column) else first_col
        if isinstance(first_col, Column) and first_col.expr.endswith(' DESC'): ascending = False
        elif isinstance(first_col, Column) and first_col.expr.endswith(' ASC'): ascending = True
        sorted_rows = sorted(self._rows, key=lambda r: r.get(col_name, ''), reverse=not ascending)
        return DataFrame(sorted_rows, self.columns, self._spark)
    def orderBy(self, *cols, **kwargs): return self.sort(*cols, **kwargs)

    def createOrReplaceTempView(self, name):
        if self._spark:
            self._spark._views[name] = self
    def createTempView(self, name): self.createOrReplaceTempView(name)

class DataFrameReader:
    def __init__(self, spark): self.spark = spark; self._options = {}; self._format = None
    def option(self, key, value): self._options[key.lower()] = value; return self
    def options(self, **options): self._options.update({k.lower(): v for k, v in options.items()}); return self
    def format(self, source): self._format = source.lower(); return self

    def _read_content(self, path):
        candidates = [path, f"/home/Hacker/{path}", f"./{path}"]
        for p in candidates:
            try:
                if os.path.isdir(p):
                    contents = []
                    for name in sorted(os.listdir(p)):
                        if name.startswith('part-') or name.endswith(('.csv', '.json', '.txt')):
                            with open(os.path.join(p, name), 'r') as f: contents.append(f.read())
                    if contents: return '\\n'.join(contents)
                with open(p, 'r') as f:
                    return f.read()
            except:
                pass
        return None

    def csv(self, path, header=True, inferSchema=True, **options):
        header = options.get('header', self._options.get('header', header))
        inferSchema = options.get('inferSchema', self._options.get('inferschema', inferSchema))
        if isinstance(header, str): header = header.lower() == 'true'
        if isinstance(inferSchema, str): inferSchema = inferSchema.lower() == 'true'
        content = self._read_content(path)
        if not content: return DataFrame([], [], self.spark)
        lines = [l.strip() for l in content.splitlines() if l.strip()]
        if not lines: return DataFrame([], [], self.spark)
        delimiter = options.get('sep', self._options.get('sep', '\\t' if '\\t' in lines[0] else ','))
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

    def text(self, path):
        content = self._read_content(path)
        return DataFrame([{'value': line} for line in (content or '').splitlines()], ['value'], self.spark)
    def parquet(self, path, **options): return self.load(path, format='parquet', **options)
    def orc(self, path, **options): return self.load(path, format='orc', **options)
    def load(self, path=None, format=None, **options):
        source = (format or self._format or 'parquet').lower()
        self.options(**options)
        if source in ('csv', 'com.databricks.spark.csv'): return self.csv(path, **options)
        if source in ('json',): return self.json(path)
        if source in ('text', 'txt'): return self.text(path)
        if source in ('parquet', 'orc'):
            raise NotImplementedError(f"{source} files are not supported by the in-memory PySpark runtime")
        raise ValueError(f"Unsupported data source: {source}")

class DataFrameWriter:
    def __init__(self, df): self.df = df; self._mode = 'error'; self._options = {}; self._format = 'parquet'
    def mode(self, mode): self._mode = mode.lower(); return self
    def option(self, key, value): self._options[key.lower()] = value; return self
    def options(self, **options): self._options.update({k.lower(): v for k, v in options.items()}); return self
    def format(self, source): self._format = source.lower(); return self
    def save(self, path=None, format=None, **options):
        source = (format or self._format).lower()
        if source in ('json',): data = '\\n'.join(json.dumps(row) for row in self.df._rows)
        elif source in ('csv',):
            sep = self._options.get('sep', ',')
            lines = [sep.join(self.df.columns)] if str(self._options.get('header', 'true')).lower() == 'true' else []
            lines.extend(sep.join('' if row.get(c) is None else str(row.get(c)) for c in self.df.columns) for row in self.df._rows)
            data = '\\n'.join(lines)
        elif source in ('text', 'txt'): data = '\\n'.join(str(row.get('value', '')) for row in self.df._rows)
        else: raise NotImplementedError(f"{source} output is not supported by the in-memory PySpark runtime")
        if not path: raise ValueError('path is required')
        os.makedirs(path, exist_ok=True)
        extension = 'json' if source == 'json' else ('txt' if source in ('text', 'txt') else 'csv')
        output_path = os.path.join(path, 'part-00000.' + extension)
        with open(output_path, 'w') as output: output.write(data)
    def csv(self, path): return self.save(path, format='csv')
    def json(self, path): return self.save(path, format='json')
    def text(self, path): return self.save(path, format='text')
    def parquet(self, path): return self.save(path, format='parquet')
    def saveAsTable(self, name):
        if self.df._spark: self.df.createOrReplaceTempView(name)

class SparkSession:
    _active = None
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

        def enableHiveSupport(self): return self

        def getOrCreate(self):
            if SparkSession._active is None or SparkSession._active._stopped:
                SparkSession._active = SparkSession(self._appName, self._master)
            return SparkSession._active

    builder = Builder()

    def __init__(self, appName="PySparkApp", master="local[*]"):
        self.appName = appName
        self.master = master
        self.version = "3.4.1"
        self.sparkContext = SparkContext(appName, master)
        self.read = DataFrameReader(self)
        self._views = {}
        self._stopped = False
        SparkSession._active = self

    def createDataFrame(self, data, schema=None):
        data = list(data)
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

        if isinstance(schema, StructType):
            data = [dict(zip(columns, row)) if not isinstance(row, dict) else row for row in data]
        elif data and isinstance(data[0], Row):
            columns = list(data[0].keys())

        return DataFrame(data, columns, self)

    def range(self, start, end=None, step=1, numPartitions=None):
        if end is None: start, end = 0, start
        return DataFrame([{'id': value} for value in range(start, end, step)], ['id'], self)

    def table(self, name):
        if name not in self._views: raise ValueError(f"Table or view not found: {name}")
        return self._views[name]

    def stop(self): self._stopped = True
    def newSession(self): return SparkSession(self.appName, self.master)
    @classmethod
    def getActiveSession(cls): return cls._active

    def sql(self, query):
        m = re.search(r'FROM\\s+([a-zA-Z0-9_]+)', query, re.I)
        if m:
            v_name = m.group(1)
            if v_name in self._views:
                df = self._views[v_name]
                select = re.search(r'^\\s*SELECT\\s+(.*?)\\s+FROM\\s+', query, re.I | re.S)
                where = re.search(r'\\s+WHERE\\s+(.+?)(?:\\s+ORDER\\s+BY|\\s+LIMIT|$)', query, re.I | re.S)
                limit = re.search(r'\\s+LIMIT\\s+(\\d+)', query, re.I)
                if where:
                    condition = where.group(1).strip()
                    match = re.match(r'([\\w.]+)\\s*(=|!=|<>|>=|<=|>|<)\\s*(.+)', condition)
                    if match:
                        name, op, value = match.groups()
                        value = value.strip().strip("'\\\"")
                        try: value = float(value) if '.' in value else int(value)
                        except ValueError: pass
                        col = Column(name)
                        df = df.filter({'=': col == value, '!=': col != value, '<>': col != value, '>': col > value, '<': col < value, '>=': col >= value, '<=': col <= value}[op])
                if select and select.group(1).strip() != '*': df = df.selectExpr(*[part.strip() for part in select.group(1).split(',')])
                if limit: df = df.limit(int(limit.group(1)))
                return df
        return DataFrame([], [], self)

# Local MLlib-compatible estimators and transformers. This is deliberately
# in-memory: it preserves the familiar PySpark API for small teaching datasets.
class Transformer:
    def transform(self, dataset): raise NotImplementedError
    def fit(self, dataset): return self
    def getInputCols(self): return list(getattr(self, 'inputCols', []))
    def getOutputCol(self): return getattr(self, 'outputCol', None)

class Estimator:
    def fit(self, dataset): raise NotImplementedError

class VectorAssembler(Transformer):
    def __init__(self, inputCols, outputCol, handleInvalid='error', **kwargs):
        self.inputCols = list(inputCols); self.outputCol = outputCol; self.handleInvalid = handleInvalid
    def transform(self, dataset):
        rows = []
        for row in dataset._rows:
            values = []
            for name in self.inputCols:
                value = row.get(name)
                if value is None:
                    if self.handleInvalid == 'skip': break
                    if self.handleInvalid == 'keep': value = 0.0
                    else: raise ValueError('NULL encountered in VectorAssembler input column ' + name)
                values.extend(value if isinstance(value, (list, tuple)) else [value])
            else:
                rows.append({**row, self.outputCol: [float(v) for v in values]})
        return DataFrame(rows, list(dataset.columns) + ([] if self.outputCol in dataset.columns else [self.outputCol]), dataset._spark)

class StringIndexerModel(Transformer):
    def __init__(self, inputCol, outputCol, labels): self.inputCol=inputCol; self.outputCol=outputCol; self.labels=labels
    def transform(self, dataset):
        index={value:i for i,value in enumerate(self.labels)}
        rows=[{**r, self.outputCol: float(index.get(r.get(self.inputCol), len(index)))} for r in dataset._rows]
        return DataFrame(rows, list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]), dataset._spark)

class StringIndexer(Estimator):
    def __init__(self, inputCol=None, outputCol=None, inputCols=None, outputCols=None, stringOrderType='frequencyDesc', handleInvalid='error', **kwargs):
        self.inputCol=inputCol or (inputCols[0] if inputCols else None); self.outputCol=outputCol or (outputCols[0] if outputCols else None); self.stringOrderType=stringOrderType
    def fit(self, dataset):
        counts={}
        for row in dataset._rows:
            value=row.get(self.inputCol)
            if value is not None: counts[value]=counts.get(value,0)+1
        labels=sorted(counts, key=(lambda x: (-counts[x], str(x))) if self.stringOrderType=='frequencyDesc' else str)
        return StringIndexerModel(self.inputCol, self.outputCol, labels)
    def transform(self, dataset): return self.fit(dataset).transform(dataset)

class OneHotEncoderModel(Transformer):
    def __init__(self, inputCols, outputCols, sizes, dropLast=True): self.inputCols=inputCols; self.outputCols=outputCols; self.sizes=sizes; self.dropLast=dropLast
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            result=dict(row)
            for source,target,size in zip(self.inputCols,self.outputCols,self.sizes):
                width=max(0,size-1) if self.dropLast else size; index=int(row.get(source,0))
                result[target]=[1.0 if i==index else 0.0 for i in range(width)]
            rows.append(result)
        return DataFrame(rows,list(dataset.columns)+[c for c in self.outputCols if c not in dataset.columns],dataset._spark)

class OneHotEncoder(Estimator):
    def __init__(self,inputCols=None,outputCols=None,inputCol=None,outputCol=None,dropLast=True,**kwargs):
        self.inputCols=list(inputCols or ([inputCol] if inputCol else [])); self.outputCols=list(outputCols or ([outputCol] if outputCol else [])); self.dropLast=dropLast
    def fit(self,dataset):
        sizes=[max([int(r.get(c,0)) for r in dataset._rows]+[0])+1 for c in self.inputCols]
        return OneHotEncoderModel(self.inputCols,self.outputCols,sizes,self.dropLast)

class ImputerModel(Transformer):
    def __init__(self, inputCols, outputCols, values): self.inputCols=inputCols; self.outputCols=outputCols; self.values=values
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            result=dict(row)
            for source,target,value in zip(self.inputCols,self.outputCols,self.values): result[target]=value if result.get(source) is None else result[source]
            rows.append(result)
        return DataFrame(rows, list(dataset.columns)+[c for c in self.outputCols if c not in dataset.columns], dataset._spark)

class Imputer(Estimator):
    def __init__(self, inputCols=None, outputCols=None, inputCol=None, outputCol=None, strategy='mean', **kwargs):
        self.inputCols=list(inputCols or ([inputCol] if inputCol else [])); self.outputCols=list(outputCols or ([outputCol] if outputCol else self.inputCols)); self.strategy=strategy
    def fit(self, dataset):
        values=[]
        for col in self.inputCols:
            present=[r.get(col) for r in dataset._rows if isinstance(r.get(col),(int,float)) and r.get(col) is not None]
            if not present: value=0.0
            elif self.strategy=='median': value=sorted(present)[len(present)//2]
            elif self.strategy=='mostFrequent': value=max(set(present), key=present.count)
            else: value=sum(present)/len(present)
            values.append(value)
        return ImputerModel(self.inputCols,self.outputCols,values)

class StandardScalerModel(Transformer):
    def __init__(self, inputCol, outputCol, means, scales, withMean, withStd): self.inputCol=inputCol; self.outputCol=outputCol; self.means=means; self.scales=scales; self.withMean=withMean; self.withStd=withStd
    def transform(self, dataset):
        rows=[]
        for row in dataset._rows:
            vector=list(row.get(self.inputCol) or [])
            values=[((float(v)-(self.means[i] if self.withMean else 0.0))/(self.scales[i] if self.withStd and self.scales[i] else 1.0)) for i,v in enumerate(vector)]
            rows.append({**row,self.outputCol:values})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class StandardScaler(Estimator):
    def __init__(self,inputCol,outputCol,withMean=False,withStd=True,**kwargs): self.inputCol=inputCol; self.outputCol=outputCol; self.withMean=withMean; self.withStd=withStd
    def fit(self,dataset):
        vectors=[r.get(self.inputCol,[]) for r in dataset._rows]; width=max((len(v) for v in vectors),default=0); means=[]; scales=[]
        for i in range(width):
            vals=[float(v[i]) for v in vectors if i<len(v)]; mean=sum(vals)/len(vals) if vals else 0.0
            means.append(mean); scales.append((sum((x-mean)**2 for x in vals)/max(1,len(vals)-1))**0.5 if vals else 1.0)
        return StandardScalerModel(self.inputCol,self.outputCol,means,scales,self.withMean,self.withStd)

class VectorModel(Transformer):
    def __init__(self, inputCol, outputCol, kind): self.inputCol=inputCol; self.outputCol=outputCol; self.kind=kind
    def transform(self,dataset):
        rows=[]
        for row in dataset._rows:
            values=list(row.get(self.inputCol) or [])
            if self.kind=='normalizer':
                norm=sum(abs(float(v)) for v in values) or 1.0; values=[float(v)/norm for v in values]
            elif self.kind=='minmax': values=[(float(v)-self.low)/(self.high-self.low or 1.0) for v in values]
            rows.append({**row,self.outputCol:values})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class Normalizer(Transformer):
    def __init__(self,inputCol='features',outputCol='normFeatures',p=2.0,**kwargs): self.inputCol=inputCol; self.outputCol=outputCol
    def transform(self,dataset):
        rows=[]
        for r in dataset._rows:
            v=list(r.get(self.inputCol) or []); norm=sum(abs(float(x))**2 for x in v)**0.5 or 1.0
            rows.append({**r,self.outputCol:[float(x)/norm for x in v]})
        return DataFrame(rows,list(dataset.columns)+([] if self.outputCol in dataset.columns else [self.outputCol]),dataset._spark)

class _PredictionModel(Transformer):
    def __init__(self, featuresCol, labelCol, predictionCol, coefficients, intercept, classification=False):
        self.featuresCol=featuresCol; self.labelCol=labelCol; self.predictionCol=predictionCol; self.coefficients=coefficients; self.intercept=intercept; self.classification=classification
    def transform(self,dataset):
        rows=[]
        for row in dataset._rows:
            x=list(row.get(self.featuresCol) or []); score=self.intercept+sum(w*float(x[i]) for i,w in enumerate(self.coefficients) if i<len(x))
            if self.classification:
                probability=1.0/(1.0+math.exp(-max(-40,min(40,score)))); prediction=1.0 if probability>=0.5 else 0.0
                rows.append({**row,self.predictionCol:prediction,'probability':[1.0-probability,probability],'rawPrediction':[-score,score]})
            else: rows.append({**row,self.predictionCol:score})
        cols=list(dataset.columns)+[c for c in ([self.predictionCol,'probability','rawPrediction'] if self.classification else [self.predictionCol]) if c not in dataset.columns]
        return DataFrame(rows,cols,dataset._spark)
    def coefficients_(self): return self.coefficients

class _GradientEstimator(Estimator):
    def __init__(self, featuresCol='features',labelCol='label',predictionCol='prediction',maxIter=100,regParam=0.0,elasticNetParam=0.0,fitIntercept=True,**kwargs):
        self.featuresCol=featuresCol; self.labelCol=labelCol; self.predictionCol=predictionCol; self.maxIter=maxIter; self.regParam=regParam; self.fitIntercept=fitIntercept
    def fit(self,dataset):
        missing=[name for name in (self.featuresCol,self.labelCol) if name not in dataset.columns]
        if missing:
            raise ValueError('Missing required input column(s): ' + ', '.join(missing) + '. Available columns: ' + ', '.join(dataset.columns) + '. Set featuresCol and labelCol to the matching columns.')
        rows=[r for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.featuresCol) is not None]
        if not rows: raise ValueError('Cannot fit model: all rows have a null value in featuresCol=' + repr(self.featuresCol) + ' or labelCol=' + repr(self.labelCol))
        width=max(len(r[self.featuresCol]) for r in rows); weights=[0.0]*width; intercept=0.0; rate=0.1; count=len(rows)
        classification=isinstance(self,LogisticRegression)
        for _ in range(max(1,min(int(self.maxIter),2000))):
            grad=[0.0]*width; bias=0.0
            for row in rows:
                x=list(row[self.featuresCol]); score=intercept+sum(weights[i]*float(x[i]) for i in range(min(width,len(x)))); target=float(row[self.labelCol])
                prediction=1.0/(1.0+math.exp(-max(-40,min(40,score)))) if classification else score
                error=prediction-target; bias+=error
                for i in range(min(width,len(x))): grad[i]+=error*float(x[i])
            for i in range(width): weights[i]-=rate*(grad[i]/count+self.regParam*weights[i])
            if self.fitIntercept: intercept-=rate*bias/count
        return _PredictionModel(self.featuresCol,self.labelCol,self.predictionCol,weights,intercept,classification)

class LogisticRegression(_GradientEstimator): pass
class LinearRegression(_GradientEstimator): pass

class PipelineModel(Transformer):
    def __init__(self,stages): self.stages=list(stages)
    def transform(self,dataset):
        result=dataset
        for stage in self.stages: result=stage.transform(result)
        return result

class Pipeline(Estimator):
    def __init__(self,stages=None): self.stages=list(stages or [])
    def getStages(self): return self.stages
    def fit(self,dataset):
        result=dataset; fitted=[]
        for stage in self.stages:
            model=stage.fit(result) if isinstance(stage,Estimator) else stage
            fitted.append(model); result=model.transform(result)
        return PipelineModel(fitted)

class Evaluator:
    def __init__(self,labelCol='label',predictionCol='prediction',metricName=None,**kwargs): self.labelCol=labelCol; self.predictionCol=predictionCol; self.metricName=metricName
    def setMetricName(self,value): self.metricName=value; return self

class RegressionEvaluator(Evaluator):
    def __init__(self,*args,metricName='rmse',**kwargs): super().__init__(*args,metricName=metricName,**kwargs)
    def evaluate(self,dataset):
        pairs=[(float(r[self.labelCol]),float(r[self.predictionCol])) for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.predictionCol) is not None]
        if not pairs: return 0.0
        errors=[p-y for y,p in pairs]; metric=self.metricName or 'rmse'
        if metric=='mae': return sum(abs(e) for e in errors)/len(errors)
        if metric=='mse': return sum(e*e for e in errors)/len(errors)
        if metric=='r2':
            mean=sum(y for y,_ in pairs)/len(pairs); denominator=sum((y-mean)**2 for y,_ in pairs)
            return 1.0-sum(e*e for e in errors)/denominator if denominator else 0.0
        return (sum(e*e for e in errors)/len(errors))**0.5

class MulticlassClassificationEvaluator(Evaluator):
    def __init__(self,*args,metricName='accuracy',**kwargs): super().__init__(*args,metricName=metricName,**kwargs)
    def evaluate(self,dataset):
        pairs=[(r[self.labelCol],r[self.predictionCol]) for r in dataset._rows if r.get(self.labelCol) is not None and r.get(self.predictionCol) is not None]
        if not pairs: return 0.0
        correct=sum(y==p for y,p in pairs); accuracy=correct/len(pairs)
        if self.metricName in ('accuracy','weightedPrecision','weightedRecall'): return accuracy
        if self.metricName=='f1': return accuracy
        return accuracy

class BinaryClassificationEvaluator(MulticlassClassificationEvaluator): pass

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
pyspark_sql_functions.concat_ws = Functions.concat_ws
pyspark_sql_functions.column = Functions.column
pyspark_sql_functions.countDistinct = Functions.countDistinct
pyspark_sql_functions.approx_count_distinct = Functions.approx_count_distinct
pyspark_sql_functions.first = Functions.first
pyspark_sql_functions.last = Functions.last
pyspark_sql_functions.collect_list = Functions.collect_list
pyspark_sql_functions.collect_set = Functions.collect_set
pyspark_sql_functions.coalesce = Functions.coalesce
pyspark_sql_functions.abs = Functions.abs
pyspark_sql_functions.round = Functions.round
pyspark_sql_functions.ceil = Functions.ceil
pyspark_sql_functions.floor = Functions.floor
pyspark_sql_functions.sqrt = Functions.sqrt
pyspark_sql_functions.length = Functions.length
pyspark_sql_functions.substring = Functions.substring
pyspark_sql_functions.regexp_replace = Functions.regexp_replace
pyspark_sql_functions.when = Functions.when
pyspark_sql_functions.expr = Functions.expr
pyspark_sql_functions.array = Functions.array
pyspark_sql_functions.struct = Functions.struct
pyspark_sql_functions.monotonically_increasing_id = Functions.monotonically_increasing_id
pyspark_sql_functions.current_timestamp = Functions.current_timestamp
pyspark_sql_functions.current_date = Functions.current_date

pyspark_sql_types.DataType = DataType
pyspark_sql_types.StringType = StringType
pyspark_sql_types.IntegerType = IntegerType
pyspark_sql_types.LongType = LongType
pyspark_sql_types.DoubleType = DoubleType
pyspark_sql_types.FloatType = FloatType
pyspark_sql_types.ByteType = ByteType
pyspark_sql_types.ShortType = ShortType
pyspark_sql_types.BinaryType = BinaryType
pyspark_sql_types.NullType = NullType
pyspark_sql_types.DecimalType = DecimalType
pyspark_sql_types.BooleanType = BooleanType
pyspark_sql_types.TimestampType = TimestampType
pyspark_sql_types.DateType = DateType
pyspark_sql_types.StructType = StructType
pyspark_sql_types.StructField = StructField
pyspark_sql_types.ArrayType = ArrayType
pyspark_sql_types.MapType = MapType

class WindowSpec:
    def __init__(self, partition_cols=None, order_cols=None):
        self.partition_cols = partition_cols or []; self.order_cols = order_cols or []
    def partitionBy(self, *cols): return WindowSpec(list(cols), self.order_cols)
    def orderBy(self, *cols): return WindowSpec(self.partition_cols, list(cols))
    def rowsBetween(self, start, end): return self
    def rangeBetween(self, start, end): return self

class Window:
    unboundedPreceding = -9223372036854775808
    unboundedFollowing = 9223372036854775807
    currentRow = 0
    @staticmethod
    def partitionBy(*cols): return WindowSpec(list(cols), [])
    @staticmethod
    def orderBy(*cols): return WindowSpec([], list(cols))

pyspark_window = types.ModuleType('pyspark.sql.window')
pyspark_window.Window = Window
pyspark_window.WindowSpec = WindowSpec
pyspark_row = types.ModuleType('pyspark.sql.row')
pyspark_row.Row = _row_factory
pyspark_readwriter = types.ModuleType('pyspark.sql.readwriter')
pyspark_readwriter.DataFrameReader = DataFrameReader
pyspark_readwriter.DataFrameWriter = DataFrameWriter
pyspark_rdd = types.ModuleType('pyspark.rdd')
pyspark_rdd.RDD = RDD
pyspark_ml = types.ModuleType('pyspark.ml')
pyspark_ml.__path__ = []
pyspark_ml_feature = types.ModuleType('pyspark.ml.feature')
pyspark_ml_feature.__path__ = []
pyspark_ml_feature.VectorAssembler = VectorAssembler
pyspark_ml_feature.StringIndexer = StringIndexer
pyspark_ml_feature.OneHotEncoder = OneHotEncoder
pyspark_ml_feature.Imputer = Imputer
pyspark_ml_feature.StandardScaler = StandardScaler
pyspark_ml_feature.Normalizer = Normalizer
pyspark_ml_classification = types.ModuleType('pyspark.ml.classification')
pyspark_ml_classification.LogisticRegression = LogisticRegression
pyspark_ml_regression = types.ModuleType('pyspark.ml.regression')
pyspark_ml_regression.LinearRegression = LinearRegression
pyspark_ml_pipeline = types.ModuleType('pyspark.ml.pipeline')
pyspark_ml_pipeline.Pipeline = Pipeline
pyspark_ml_pipeline.PipelineModel = PipelineModel
pyspark_ml_evaluation = types.ModuleType('pyspark.ml.evaluation')
pyspark_ml_evaluation.RegressionEvaluator = RegressionEvaluator
pyspark_ml_evaluation.MulticlassClassificationEvaluator = MulticlassClassificationEvaluator
pyspark_ml_evaluation.BinaryClassificationEvaluator = BinaryClassificationEvaluator
pyspark_ml.Pipeline = Pipeline
pyspark_ml.PipelineModel = PipelineModel
pyspark_ml.feature = pyspark_ml_feature
pyspark_ml.classification = pyspark_ml_classification
pyspark_ml.regression = pyspark_ml_regression
pyspark_ml.pipeline = pyspark_ml_pipeline
pyspark_ml.evaluation = pyspark_ml_evaluation
pyspark_conf = types.ModuleType('pyspark.conf')
pyspark_conf.SparkConf = SparkConf
pyspark_sql.Row = _row_factory
pyspark_sql.Window = Window
pyspark_sql.functions = pyspark_sql_functions
pyspark_sql.types = pyspark_sql_types
pyspark_sql.window = pyspark_window
pyspark_sql.row = pyspark_row
pyspark_sql.readwriter = pyspark_readwriter
pyspark_mod.sql = pyspark_sql
pyspark_mod.conf = pyspark_conf
pyspark_mod.rdd = pyspark_rdd
pyspark_mod.ml = pyspark_ml
pyspark_mod.__version__ = '3.4.1-local'
pyspark_mod.SparkConf = SparkConf
pyspark_mod.__path__ = []
pyspark_sql.__path__ = []
pyspark_functions_all = [name for name in dir(Functions) if not name.startswith('_')]
for __function_name in pyspark_functions_all:
    setattr(pyspark_sql_functions, __function_name, getattr(Functions, __function_name))

pyspark_context.SparkContext = SparkContext
pyspark_mod.SparkContext = SparkContext
pyspark_context.SparkConf = SparkConf

sys.modules['pyspark'] = pyspark_mod
sys.modules['pyspark.sql'] = pyspark_sql
sys.modules['pyspark.sql.functions'] = pyspark_sql_functions
sys.modules['pyspark.sql.types'] = pyspark_sql_types
sys.modules['pyspark.context'] = pyspark_context
sys.modules['pyspark.conf'] = pyspark_conf
sys.modules['pyspark.rdd'] = pyspark_rdd
sys.modules['pyspark.ml'] = pyspark_ml
sys.modules['pyspark.ml.feature'] = pyspark_ml_feature
sys.modules['pyspark.ml.classification'] = pyspark_ml_classification
sys.modules['pyspark.ml.regression'] = pyspark_ml_regression
sys.modules['pyspark.ml.pipeline'] = pyspark_ml_pipeline
sys.modules['pyspark.ml.evaluation'] = pyspark_ml_evaluation
sys.modules['pyspark.sql.window'] = pyspark_window
sys.modules['pyspark.sql.row'] = pyspark_row
sys.modules['pyspark.sql.readwriter'] = pyspark_readwriter
`;
