import Primitive from "Type/Primitive/Primitive"
import isBoolean from "Type/isBoolean/isBoolean"
import isNil from "Type/isNil/isNil"
import isNumber from "Type/isNumber/isNumber"
import isString from "Type/isString/isString"
import isSymbol from "Type/isSymbol/isSymbol"



const isPrimitive = <T>(value: T | Primitive): value is Primitive =>
    isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)



export default isPrimitive

