import autocurry from "Function/autocurry/autocurry"



const and = (a, b) =>
    a && b



export default autocurry(and)
