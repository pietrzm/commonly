import isBoolean from "Type/isBoolean/isBoolean"
import isNill from "Type/isNill/isNill"
import isNumber from "Type/isNumber/isNumber"
import isString from "Type/isString/isString"
import isSymbol from "Type/isSymbol/isSymbol"



const isPrimitive = x =>
    isNill(x) || isBoolean(x) || isNumber(x) || isString(x) || isSymbol(x)



export default isPrimitive