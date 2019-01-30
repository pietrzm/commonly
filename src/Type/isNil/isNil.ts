import isNull from "Type/isNull/isNull"
import isUndefined from "Type/isUndefined/isUndefined"



const isNil = (x) =>
    isUndefined(x) || isNull(x)



export default isNil
