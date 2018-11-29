import { curry } from "../../Function"
import { xfind } from "../../Transducer"
import seq from "../seq/seq"



const find = (predicate, xs) =>
    seq(xfind(predicate), xs)



export default curry(find)