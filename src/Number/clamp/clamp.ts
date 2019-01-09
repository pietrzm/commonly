import curry from "Function/curry/curry"
import maximum from "Number/maximum/maximum"
import minimum from "Number/minimum/minimum"



/**
 * Clamps number within the inclusive lower and upper bounds.
 *
 * @param [ upper, lower ]
 * @param {number} value
 * @returns {number}
 */
const clamp = ([ lower, upper ], value) =>
	maximum(minimum(value, upper), lower)



export default curry(clamp)