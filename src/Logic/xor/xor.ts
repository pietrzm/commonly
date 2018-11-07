import { curry } from "../../Function/index"


const xor = (a, b) =>
    !!(a ^ b)


export default curry(xor)


export const eor = xor

export const exor = xor