import autocurry from "Function/autocurry/autocurry"



const add = (augend, addend) =>
    augend + addend



export default autocurry(add) as {
    (augend: number, addend: number): number
    (augend: number): (addend: number) => number
}
