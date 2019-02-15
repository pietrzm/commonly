const isBoolean = <T>(value: T | boolean): value is boolean =>
    typeof value === "boolean"



export default isBoolean
