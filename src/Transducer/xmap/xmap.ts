import autocurry from "Function/autocurry/autocurry"



const xmap = (mapper, reducer) =>
    (accumulator, value) =>
        reducer(accumulator, mapper(value))



export default autocurry(xmap)
