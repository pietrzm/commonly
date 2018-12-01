import { isUndefined, isNull } from "Type"



const isNill = x =>
    isUndefined(x) || isNull(x)



export default isNill