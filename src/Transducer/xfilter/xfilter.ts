import curry from "Function/curry/curry"



const xfilter = (predicate, reducer) => (accumulator, x) =>
    predicate(x) ?
        reducer(accumulator, x)
        : accumulator



export default curry(xfilter)