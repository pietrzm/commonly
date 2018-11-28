import { curry } from "../../Function/index"
import { xor, not } from "../../Logic"



const xnor = (a, b) =>
    not(xor(a, b))



export default curry(xnor)
