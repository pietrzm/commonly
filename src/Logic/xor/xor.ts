import { curry } from "../../Function/index"
import { or, not } from "../../Logic"


const xor = (a, b) =>
    not(or(a, b))


export default curry(xor)


export const eor = xor

export const exor = xor