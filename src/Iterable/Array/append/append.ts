import curry from "Function/curry/curry"



/**
 * Returns an Array with elements from xs, followed by the x.
 *
 * @param x
 * @param {Array} xs
 * @returns {Array}
 */
const append = (x, xs) =>
	[ ...xs, x ]



export default curry(append)