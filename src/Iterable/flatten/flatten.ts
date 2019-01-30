import seq from "Iterable/seq/seq"
import xflatten from "Transducer/xflatten/xflatten"



/**
 * Returns an Array which is flattened to a single level deep.
 *
 * @param xs
 * @returns {null}
 */
const flatten = (xs) =>
    seq(xflatten, xs)



export default flatten
