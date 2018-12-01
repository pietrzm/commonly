import { isNull } from "Type"



const isObject = x =>
    typeof x === "object" && !isNull(x)



export default isObject