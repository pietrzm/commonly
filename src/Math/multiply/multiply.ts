import autocurry from "Function/autocurry/autocurry"



const multiply = (multiplier, multiplicand) =>
    multiplier * multiplicand



export default autocurry(multiply)
