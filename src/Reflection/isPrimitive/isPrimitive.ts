import isBoolean from "Reflection/isBoolean/isBoolean"
import isNil from "Reflection/isNil/isNil"
import isNumber from "Reflection/isNumber/isNumber"
import isString from "Reflection/isString/isString"
import isSymbol from "Reflection/isSymbol/isSymbol"
import Primitive from "Type/Primitive/Primitive"



const isPrimitive = (x) =>
    isNil(x) || isBoolean(x) || isNumber(x) || isString(x) || isSymbol(x)



export default isPrimitive as {
    <T>(x: T | Primitive): x is Primitive
}

