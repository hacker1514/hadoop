import { Mapper, Reducer } from '../engine/pluginApi';

export class WordCountMapper implements Mapper<number, string, string, number> {
  map(_offset: number, line: string, context: any): void {
    const words = line.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
    words.forEach((word) => context.write(word, 1));
  }
}

export class WordCountReducer implements Reducer<string, number, string, number> {
  reduce(key: string, values: number[], context: any): void {
    const sum = values.reduce((acc, v) => acc + v, 0);
    context.write(key, sum);
  }
}

export class LineCountMapper implements Mapper<number, string, string, number> {
  map(_offset: number, _line: string, context: any): void {
    context.write('total_lines', 1);
  }
}

export class LineCountReducer implements Reducer<string, number, string, number> {
  reduce(key: string, values: number[], context: any): void {
    const sum = values.reduce((acc, v) => acc + v, 0);
    context.write(key, sum);
  }
}

export class SalesAggregationMapper implements Mapper<number, string, string, number> {
  map(_offset: number, line: string, context: any): void {
    const parts = line.split(',');
    if (parts.length >= 3) {
      const region = parts[0].trim();
      const amount = parseFloat(parts[2].trim()) || 0;
      context.write(region, amount);
    }
  }
}

export class SalesAggregationReducer implements Reducer<string, number, string, number> {
  reduce(key: string, values: number[], context: any): void {
    const totalSales = values.reduce((acc, v) => acc + v, 0);
    context.write(key, totalSales);
  }
}

export class LogAnalyzerMapper implements Mapper<number, string, string, number> {
  map(_offset: number, line: string, context: any): void {
    const statusMatch = line.match(/HTTP\/\d\.\d"\s+(\d{3})/);
    if (statusMatch) {
      const statusCode = statusMatch[1];
      context.write(`STATUS_${statusCode}`, 1);
    }
  }
}

export class LogAnalyzerReducer implements Reducer<string, number, string, number> {
  reduce(key: string, values: number[], context: any): void {
    const count = values.reduce((acc, v) => acc + v, 0);
    context.write(key, count);
  }
}
