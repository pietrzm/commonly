import { curry } from "../../Function/index"


const and = (a, b) =>
    !!(a & b)


export default curry(and)