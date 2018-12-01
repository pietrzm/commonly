import { seq } from "List"
import { xslice } from "Transducer"



const slice = (a, b, xs) =>
    seq(xslice(a, b), xs)



export default slice