import isNull from "Type/isNull/isNull"



const isObject = <T>(value: T | object): value is object =>
    typeof value === "object" && !isNull(value)



export default isObject
