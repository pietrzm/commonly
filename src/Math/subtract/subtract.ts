import { curry } from "../../Function/index"


const subtract = (a, b) =>
    a - b;


export default curry(subtract)