import { curry } from "../../Function/index"


const multiply = (a, b) =>
    a * b;


export default curry(multiply)