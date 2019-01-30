import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"



const xfind = (predicate, reducer) =>
    (accumulator, value) =>
        predicate(value) ?
            reduced(value)
            : undefined



export default autocurry(xfind)
