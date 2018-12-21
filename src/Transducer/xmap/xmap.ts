import curry from "Function/curry/curry"



const xmap = (mapper, reducer) =>
	(accumulator, value) =>
        reducer(accumulator, mapper(value))



export default curry(xmap)