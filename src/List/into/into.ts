import { curry } from "../../Function"
import { isArray, isString, isSet, isMap } from "../../Type"
import { transduce } from "../../List"


const into = (to, xf, xs) => {
    switch (true) {
        case isArray(xs):
            return transduce(xf, (xs, x) => (xs.push(x), xs), to, xs)
        case isString(xs):
            return transduce(xf, (xs, x) => xs + x, to, xs)
        case isSet(xs):
            return transduce(xf, (xs, x) => xs.add(x), to, xs)
        case isMap(xs):
            return transduce(xf, (xs, x) => xs.set(...x), to, xs)
    }
}


export default curry(into)