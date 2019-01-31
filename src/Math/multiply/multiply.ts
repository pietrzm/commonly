import autocurry from "Function/autocurry/autocurry"



const multiply = (multiplier, multiplicand) =>
    multiplier * multiplicand



export default autocurry(multiply) as {
    (multiplier: number, multiplicand: number): number
    (multiplier: number): (multiplicand: number) => number
}
