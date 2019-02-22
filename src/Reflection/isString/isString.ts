const isString = <T>(value: T | string): value is string =>
    typeof value === "string"



export default isString
