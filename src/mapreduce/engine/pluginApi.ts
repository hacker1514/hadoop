export interface MapperContext<K2 = string, V2 = number> {
  write(key: K2, value: V2): void;
  incrementCounter(group: string, name: string, amount?: number): void;
}

export interface ReducerContext<K3 = string, V3 = string | number> {
  write(key: K3, value: V3): void;
  incrementCounter(group: string, name: string, amount?: number): void;
}

export interface Mapper<K1 = number, V1 = string, K2 = string, V2 = number> {
  map(key: K1, value: V1, context: MapperContext<K2, V2>): void;
}

export interface Reducer<K2 = string, V2 = number, K3 = string, V3 = string | number> {
  reduce(key: K2, values: V2[], context: ReducerContext<K3, V3>): void;
}
