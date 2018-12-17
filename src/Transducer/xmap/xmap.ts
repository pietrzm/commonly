import curry from "Function/curry/curry"



const xmap = (transformer, reducer) => (accumulator, x) =>
    reducer(accumulator, transformer(x))



export default curry(xmap)