import { curry } from "Function"
import { seq } from "List"
import { xtake } from "Transducer"



const take = (n, xs) =>
    seq(xtake(n), xs)



export default curry(take)