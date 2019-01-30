import autocurry from "Function/autocurry/autocurry"



/**
 * Returns an element at index i of an Array.
 *
 * @param i
 * @param xs
 * @returns {*}
 */
const nth = (i, xs) => {
    if (i < 0) {
        i = xs.length + i
    }

    return xs[i]
}



export default autocurry(nth)
