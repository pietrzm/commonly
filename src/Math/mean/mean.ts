import reduce from "Iterable/reduce/reduce"
import add from "Math/add/add"



const mean = (numbers: number[]): number =>
    reduce(add, 0, numbers) / numbers.length



export default mean
