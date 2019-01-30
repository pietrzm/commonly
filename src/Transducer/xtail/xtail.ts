import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"



const xtail = (reducer) =>
    xslice(1, Infinity, reducer)



export default autocurry(xtail)
