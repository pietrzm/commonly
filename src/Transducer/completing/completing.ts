import XWrap from "../../Protocol/Transducer/XWrap/XWrap"
import isFunction from "../../Type/isFunction/isFunction"



const completing = reducer =>
    isFunction(reducer) ?
        new XWrap(reducer)
        : reducer



export default completing