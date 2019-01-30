import autocurry from "Function/autocurry/autocurry"



const or = (a, b) =>
    a || b



export default autocurry(or)
