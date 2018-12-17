import isNull from "Type/isNull/isNull"
import isUndefined from "Type/isUndefined/isUndefined"



const isNill = x =>
    isUndefined(x) || isNull(x)



export default isNill