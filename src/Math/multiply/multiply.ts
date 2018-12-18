import curry from "Function/curry/curry"



const multiply = (multiplier, multiplicand) =>
    multiplier * multiplicand;



export default curry(multiply)