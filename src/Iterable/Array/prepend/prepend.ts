import autocurry from "Function/autocurry/autocurry"



/**
 * Returns an Array with x, followed by the elements from xs.
 *
 * @param x
 * @param {Array} xs
 * @returns {Array}
 */
const prepend = (x, xs) =>
	[ x, ...xs ]



export default autocurry(prepend)