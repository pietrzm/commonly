const isString = (x) =>
    typeof x === "string"



export default isString as {
    <T>(x: T | string): x is string
}
