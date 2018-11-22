import { curry } from "../../Function"
import seq from "../seq/seq"
import * as Transducer from "../../Transducer"


const map = (xf, xs) =>
    seq(Transducer.map(xf), xs)


export default curry(map)