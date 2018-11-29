import { seq } from "../../List"
import { xtail } from "../../Transducer"



const tail = xs =>
    seq(xtail, xs)



export default tail