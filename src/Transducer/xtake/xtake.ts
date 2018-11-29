import { curry } from "../../Function"
import { xslice } from "../../Transducer"



const xtake = (n, reducer) =>
    xslice(0, n, reducer)



export default curry(xtake)