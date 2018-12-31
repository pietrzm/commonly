import curry from "Function/curry/curry"



/**
 * Adds an element to the end of an Array, then returns that Array.
 *
 * @param x
 * @param {Array} xs
 * @returns {Array}
 */
const push = (x, xs) =>
	(xs.push(x), xs)



export default curry(push)