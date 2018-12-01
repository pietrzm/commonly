import { curry } from "Function"



const xfilter = (predicate, reducer) => (accumulator, x) =>
    predicate(x) ?
        reducer(accumulator, x)
        : accumulator



export default curry(xfilter)