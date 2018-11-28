import { curry } from "../../Function"
import seq from "../seq/seq"
import { xmap } from "../../Transducer"



const map = (transformer, xs) =>
    seq(xmap(transformer), xs)



export default curry(map)