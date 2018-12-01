import { curry } from "Function"
import { into, seed } from "List"



const seq = (xf, xs) =>
    into(seed(xs), xf, xs)



export default curry(seq)