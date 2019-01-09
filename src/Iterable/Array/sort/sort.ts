import curry from "Function/curry/curry"



/**
 * Sorts an Array by given comparator.
 *
 * @param comparator
 * @param {Array<*>} xs
 * @returns {Array<*>}
 */
const sort = (comparator, xs) =>
	xs.slice().sort(comparator)



export default curry(sort)