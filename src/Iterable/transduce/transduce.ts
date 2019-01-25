import autocurry  from "Function/autocurry/autocurry"
import reduce from "Iterable/reduce/reduce"



const transduce = (xf, reducer, accumulator, xs) =>
    reduce(xf(reducer), accumulator, xs)



export default autocurry(transduce)