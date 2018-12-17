import curry from "Function/curry/curry"
import xslice from "Transducer/xslice/xslice"



const xtake = (n, reducer) =>
    xslice(0, n, reducer)



export default curry(xtake)