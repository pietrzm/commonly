const isMap = <K, V>(value: V | Map<K, V>): value is Map<K, V> =>
    value instanceof Map



export default isMap as {
    <K, V>(x: V | Map<K, V>): x is Map<K, V>
}
