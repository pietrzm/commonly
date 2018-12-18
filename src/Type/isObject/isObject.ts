import isNull from "Type/isNull/isNull"



const isObject = (x) =>
    typeof x === "object" && !isNull(x)



export default isObject