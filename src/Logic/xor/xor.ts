import autocurry from "Function/autocurry/autocurry"



const xor = (a, b) =>
    a !== b



export default autocurry(xor)
