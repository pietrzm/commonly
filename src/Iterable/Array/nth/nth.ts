import curry from "Function/curry/curry"



/**
 * Returns an element at index i of an Array.
 *
 * @param i
 * @param xs
 * @returns {*}
 */
const nth = (i, xs) => {
	if (i < 0) {
		i = xs.length + i
	}

	return xs[i]
}



export default curry(nth)