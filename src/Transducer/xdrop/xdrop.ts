import curry from "Function/curry/curry"
import xslice from "Transducer/xslice/xslice"



const xdrop = (n, reducer) =>
    xslice(n, Infinity, reducer)



export default curry(xdrop)