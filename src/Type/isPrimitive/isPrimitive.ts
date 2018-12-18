import isBoolean from "Type/isBoolean/isBoolean"
import isNil from "Type/isNil/isNil"
import isNumber from "Type/isNumber/isNumber"
import isString from "Type/isString/isString"
import isSymbol from "Type/isSymbol/isSymbol"



const isPrimitive = x =>
    isNil(x) || isBoolean(x) || isNumber(x) || isString(x) || isSymbol(x)



export default isPrimitive