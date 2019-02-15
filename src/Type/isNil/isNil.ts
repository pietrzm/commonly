import Nil from "Type/Nil/Nil"
import isNull from "Type/isNull/isNull"
import isUndefined from "Type/isUndefined/isUndefined"



const isNil = <T>(value: T | Nil): value is Nil =>
    isUndefined(value) || isNull(value)



export default isNil
