import autocurry from "Function/autocurry/autocurry"
import not from "Logic/not/not"
import xor from "Logic/xor/xor"



const xnor = (a, b) =>
    not(xor(a, b))



export default autocurry(xnor)
