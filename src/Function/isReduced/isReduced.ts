import isObject from "Type/isObject/isObject"



const isReduced = x =>
    isObject(x) && x.isReduced



export default isReduced