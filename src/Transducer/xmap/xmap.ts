import { curry } from "Function"



const xmap = (transformer, reducer) => (accumulator, x) =>
    reducer(accumulator, transformer(x))



export default curry(xmap)