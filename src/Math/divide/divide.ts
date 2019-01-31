import autocurry from "Function/autocurry/autocurry"



const divide = (dividend, divisor) =>
    dividend / divisor



export default autocurry(divide) as {
    (dividend: number, divisor: number): number
    (dividend: number): (divisor: number) => number
}
