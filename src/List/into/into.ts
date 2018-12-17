import curry from "Function/curry/curry"
import identity from "Function/identity/identity"
import transduce from "List/transduce/transduce"
import isArray from "Type/isArray/isArray"
import isMap from "Type/isMap/isMap"
import isSet from "Type/isSet/isSet"
import isString from "Type/isString/isString"
import isUndefined from "Type/isUndefined/isUndefined"



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
        case isUndefined(accumulator):
            return transduce(xf, identity, accumulator, xs);
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