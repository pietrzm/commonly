import curry from "Function/curry/curry"
import castArray from "Type/castArray/castArray"



const xchain = (mapper, reducer) =>
	(accumulator, value) => {
		for (const x of castArray(mapper(value))) {
			reducer(accumulator, x)
		}

		return accumulator
	}



export default curry(xchain)