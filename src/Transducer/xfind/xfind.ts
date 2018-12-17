import curry from "Function/curry/curry"
import reduced from "Function/reduced/reduced"



const xfind = (predicate, reducer) => (accumulator, x) =>
    predicate(x) ?
        reduced(x)
        : reducer(undefined)



export default curry(xfind)