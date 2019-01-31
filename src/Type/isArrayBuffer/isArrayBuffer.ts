const isArrayBuffer = (x) =>
    x instanceof ArrayBuffer



export default isArrayBuffer as {
    <T>(x: T | ArrayBuffer): x is ArrayBuffer
}
