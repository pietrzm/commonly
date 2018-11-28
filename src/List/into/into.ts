import { curry } from "../../Function"
import { isArray, isString, isSet, isMap } from "../../Type"
import { transduce } from "../../List"
import { cases, when } from "../../Logic"



const into = (accumulator, xf, xs) =>
    cases([
        when(isArray,
            () => transduce(xf, (xs, x) => (xs.push(x), xs), accumulator, xs)),
        when(isString,
            () => transduce(xf, (xs, x) => xs + x, accumulator, xs)),
        when(isSet,
            () => transduce(xf, (xs, x) => xs.add(x), accumulator, xs)),
        when(isMap,
            () => transduce(xf, (xs, x) => xs.set(...x), accumulator, xs)),
    ], accumulator)



export default curry(into)