import curry from "Function/curry/curry"



/**
 * Returns an Array with x, followed by the elements from xs.
 *
 * @param x
 * @param {Array} xs
 * @returns {Array}
 */
const prepend = (x, xs) =>
	[ x, ...xs ]



export default curry(prepend)