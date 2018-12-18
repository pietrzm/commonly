import curry from "Function/curry/curry"



const divide = (dividend, divisor) =>
    dividend / divisor;



export default curry(divide)