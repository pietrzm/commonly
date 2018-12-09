import { curry } from "Function"
import { isArray, isString, isSet, isMap } from "Type"
import { transduce } from "List"



const into = (accumulator, xf, xs) => {
    switch (true) {
        case isArray(accumulator):
            return transduce(xf, (xs, x) => (xs.push(x), xs), accumulator, xs);
        case isString(accumulator):
            return transduce(xf, (xs, x) => xs + x, accumulator, xs);
        case isSet(accumulator):
            return transduce(xf, (xs, x) => xs.add(x), accumulator, xs);
        case isMap(accumulator):
            return transduce(xf, (xs, kx) => xs.set(kx[0], kx[1]), accumulator, xs);
    }
}


// TODO: Rethink this implementation
    // cases([
    //     when(isArray,
    //         () => transduce(xf, (xs, x) => (xs.push(x), xs), accumulator, xs)),
    //     when(isString,
    //         () => transduce(xf, (xs, x) => xs + x, accumulator, xs)),
    //     when(isSet,
    //         () => transduce(xf, (xs, x) => xs.add(x), accumulator, xs)),
    //     when(isMap,
    //         () => transduce(xf, (xs, x) => xs.set(...x), accumulator, xs))
    // ], accumulator)



export default curry(into)