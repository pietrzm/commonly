import { curry } from "../../Function"
import { and, not } from "../../Logic"


const nand = (a, b) =>
    not(and(a, b))


export default curry(nand)