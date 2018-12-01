import { curry } from "Function"



const multiply = (a, b) =>
    a * b;



export default curry(multiply)