import curry from "Function/curry/curry"



/**
 * Returns an index of the first occurrence of an element in an Array.
 *
 * @param {number} n
 * @param xs
 * @returns {number}
 */
const indexOf = (n, xs) =>
	xs.indexOf(n)



export default curry(indexOf)