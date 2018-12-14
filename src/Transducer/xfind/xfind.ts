import { curry, reduced } from "Function"



const xfind = (predicate, reducer) => (accumulator, x) =>
    predicate(x) ?
        reduced(x)
        : reducer(undefined)



export default curry(xfind)