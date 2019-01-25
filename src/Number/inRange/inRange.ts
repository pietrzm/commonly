import autocurry from "Function/autocurry/autocurry"



/**
 * Returns a boolean indicating whether a given value is within a lower and upper bounds.
 *
 * @param [ lower, upper ]
 * @param {number} value
 * @returns {number}
 */
const inRange = ([ lower, upper ], value) =>
	value >= lower && value < upper



export default autocurry(inRange)