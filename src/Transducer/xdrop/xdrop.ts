import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"



const xdrop = (n, reducer) =>
    xslice(n, Infinity, reducer)



export default autocurry(xdrop)