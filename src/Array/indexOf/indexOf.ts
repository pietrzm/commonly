import autocurry from "Function/autocurry/autocurry"



/**
 * Returns an index of the first occurrence of an element in an Array.
 *
 * @param {number} n
 * @param xs
 * @returns {number}
 */
const indexOf = (n, xs) =>
    xs.indexOf(n)



export default autocurry(indexOf)
