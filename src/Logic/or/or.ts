import { curry } from "Function"



const or = (a, b) =>
    !!(a | b)



export default curry(or)