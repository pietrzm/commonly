import autocurry from "Function/autocurry/autocurry"
import and from "Logic/and/and"
import not from "Logic/not/not"



const nand = (a, b) =>
    not(and(a, b))



export default autocurry(nand)
