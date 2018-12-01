import { curry } from "Function"



const add = (a, b) =>
    a + b;



export default curry(add)