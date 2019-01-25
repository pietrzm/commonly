import autocurry from "Function/autocurry/autocurry"



const divide = (dividend, divisor) =>
    dividend / divisor;



export default autocurry(divide)