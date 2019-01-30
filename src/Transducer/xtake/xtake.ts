import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"



const xtake = (n, reducer) =>
    xslice(0, n, reducer)



export default autocurry(xtake)
