import reducer from "Function/reducer/reducer"



/**
 * Adds an x to a given iterable.
 *
 * @param x
 * @param {Iterable} xs
 * @returns {*}
 */
const push = (x, xs) =>
	reducer(xs)(xs, x)



export default push