import isNull from "Reflection/isNull/isNull"



const isObject = <T>(value: T | Object): value is Object =>
    typeof value === "object" && !isNull(value)



export default isObject
