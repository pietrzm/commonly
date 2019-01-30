import autocurry from "Function/autocurry/autocurry"



const xfilter = (predicate, reducer) =>
    (accumulator, value) =>
        predicate(value) ?
            reducer(accumulator, value)
            : accumulator



export default autocurry(xfilter)
