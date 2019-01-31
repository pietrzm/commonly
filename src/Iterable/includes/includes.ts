import autocurry from "Function/autocurry/autocurry"
import into from "Iterable/into/into"
import xincludes from "Transducer/xincludes/xincludes"



/**
 * Returns a boolean indicating whether x exists in xs or not.
 *
 * @param x
 * @param xs
 * @returns {null}
 */
const includes = (x, xs) =>
    into(false, xincludes(x), xs)



export default autocurry(includes) as {
    <T>(x: T, xs: Iterable<T>): boolean
    <T>(x: T): (xs: Iterable<T>) => boolean
}
