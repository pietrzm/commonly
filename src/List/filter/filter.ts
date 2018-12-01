import { curry } from "Function"
import { xfilter } from "Transducer"
import { seq } from "List"



const filter = (predicate, xs) =>
    seq(xfilter(predicate), xs)



export default curry(filter)