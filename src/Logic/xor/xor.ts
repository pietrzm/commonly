import { curry } from "Function"



const xor = (a, b) =>
    !!(a ^ b)



export default curry(xor)