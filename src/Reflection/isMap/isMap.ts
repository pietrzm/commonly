const isMap = <K, V>(value: V | Map<K, V>): value is Map<K, V> =>
    value instanceof Map



export default isMap
