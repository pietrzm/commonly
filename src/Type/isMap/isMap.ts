const isMap = (x) =>
    x instanceof Map



export default isMap as {
    <K, V>(x: V | Map<K, V>): x is Map<K, V>
}
