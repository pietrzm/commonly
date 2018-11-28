import { curry } from "../../Function/index"



const add = (a, b) =>
    a + b;



export default curry(add)