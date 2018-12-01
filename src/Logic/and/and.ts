import { curry } from "Function"



const and = (a, b) =>
    !!(a & b)



export default curry(and)