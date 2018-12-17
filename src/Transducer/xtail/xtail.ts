import curry from "Function/curry/curry"
import xslice from "Transducer/xslice/xslice"



const xtail = (reducer) =>
    xslice(1, Infinity, reducer)



export default curry(xtail)