const isArrayBuffer = <T>(value: T | ArrayBuffer): value is ArrayBuffer =>
    value instanceof ArrayBuffer



export default isArrayBuffer
