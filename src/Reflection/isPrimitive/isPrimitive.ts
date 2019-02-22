import isBoolean from "Reflection/isBoolean/isBoolean"
import isNil from "Reflection/isNil/isNil"
import isNumber from "Reflection/isNumber/isNumber"
import isString from "Reflection/isString/isString"
import isSymbol from "Reflection/isSymbol/isSymbol"
import Primitive from "Type/Primitive/Primitive"



const isPrimitive = <T>(value: T | Primitive): value is Primitive =>
    isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)



export default isPrimitive

