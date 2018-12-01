import { curry } from "Function"



const subtract = (a, b) =>
    a - b;



export default curry(subtract)