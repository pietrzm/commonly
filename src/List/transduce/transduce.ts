import { curry } from "Function"
import { reduce } from "List"



const transduce = (xf, reducer, accumulator, xs) =>
    reduce(xf(reducer), accumulator, xs)



export default curry(transduce)