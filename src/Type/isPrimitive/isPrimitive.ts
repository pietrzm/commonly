import { isNill, isBoolean, isNumber, isString, isSymbol } from "Type"



const isPrimitive = x =>
    isNill(x) || isBoolean(x) || isNumber(x) || isString(x) || isSymbol(x)



export default isPrimitive