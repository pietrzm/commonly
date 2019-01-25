import autocurry from "Function/autocurry/autocurry"
import castArray from "Type/castArray/castArray"



const xchain = (mapper, reducer) =>
	(accumulator, value) => {
		for (const x of castArray(mapper(value))) {
			reducer(accumulator, x)
		}

		return accumulator
	}



export default autocurry(xchain)