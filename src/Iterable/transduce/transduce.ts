import curry  from "Function/curry/curry"
import reduce from "Iterable/reduce/reduce"



const transduce = (xf, reducer, accumulator, xs) =>
    reduce(xf(reducer), accumulator, xs)



export default curry(transduce)