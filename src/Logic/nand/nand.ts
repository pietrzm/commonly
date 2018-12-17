import curry from "Function/curry/curry"
import and from "Logic/and/and"
import not from "Logic/not/not"



const nand = (a, b) =>
    not(and(a, b))



export default curry(nand)