import { curry } from "Function"
import { xmap } from "Transducer"
import { seq } from "List"



const map = (transformer, xs) =>
    seq(xmap(transformer), xs)



export default curry(map)