const isBoolean = (x) =>
    typeof x === "boolean"



export default isBoolean as {
    <T>(x: T | boolean): x is boolean
}
