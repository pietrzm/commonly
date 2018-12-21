import curry from "Function/curry/curry"



const xfilter = (predicate, reducer) =>
	(accumulator, value) =>
	    predicate(value) ?
	        reducer(accumulator, value)
	        : accumulator



export default curry(xfilter)