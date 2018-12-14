import { curry } from "Function"
import { xfind } from "Transducer"
import { into, seq } from "List"



const find = (predicate, xs) =>
    into(undefined, xfind(predicate), xs)



export default curry(find)