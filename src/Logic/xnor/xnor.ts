import { curry } from "Function"
import { xor, not } from "Logic"



const xnor = (a, b) =>
    not(xor(a, b))



export default curry(xnor)
