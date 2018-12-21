import curry from "Function/curry/curry"
import reduced from "Function/reduced/reduced"



const xfind = (predicate, reducer) =>
	(accumulator, value) =>
	    predicate(value) ?
	        reduced(value)
	        : undefined



export default curry(xfind)