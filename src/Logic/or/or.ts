import { curry } from "../../Function/index"


const or = (a, b) =>
    !!(a | b)


export default curry(or)