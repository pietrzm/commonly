import isNull from "Reflection/isNull/isNull"
import isUndefined from "Reflection/isUndefined/isUndefined"
import Nil from "Type/Nil/Nil"



const isNil = (x) =>
    isUndefined(x) || isNull(x)



export default isNil as {
    <T>(x: T | Nil): x is Nil
}
