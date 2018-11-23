import { curry } from "../../Function"
import * as Transducer from "../../Transducer"
import seq from "../seq/seq"


const filter = (predicate, xs) =>
    seq(Transducer.filter(predicate), xs)


export default curry(filter)