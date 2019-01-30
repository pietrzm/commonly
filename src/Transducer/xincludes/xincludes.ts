import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"



const xincludes = (x, reducer) =>
    (accumulator, value) =>
        x === value ?
            reduced(true)
            : false



export default autocurry(xincludes)
