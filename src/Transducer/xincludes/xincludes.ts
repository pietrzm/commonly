import curry from "Function/curry/curry"
import reduced from "Function/reduced/reduced"



const xincludes = (x, reducer) =>
	(accumulator, value) =>
		x === value ?
			reduced(true)
			: false



export default curry(xincludes)