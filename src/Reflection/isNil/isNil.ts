import isNull from "Reflection/isNull/isNull"
import isUndefined from "Reflection/isUndefined/isUndefined"
import Nil from "Type/Nil/Nil"



const isNil = <T>(value: T | Nil): value is Nil =>
    isUndefined(value) || isNull(value)



export default isNil
