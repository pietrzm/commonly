import { seq } from "../../List"
import xslice from "../../Transducer/xslice/xslice"



const slice = (a, b, xs) =>
    seq(xslice(a, b), xs)



export default slice