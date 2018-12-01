import { curry } from "Function"
import { xslice } from "Transducer"



const xtail = (reducer) =>
    xslice(1, Infinity, reducer)



export default curry(xtail)