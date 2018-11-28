import { curry } from "../../Function"
import isObject from "../../Type/isObject/isObject"
import completing from "../../Transducer/completing/completing"


const reduce = (reducer, accumulator, xs) => {
    let i = 0

    reducer = completing(reducer)

    for (const x of xs) {
        if (isObject(reducer)) {
            accumulator = reducer["@@transducer/step"](accumulator, x, i++, xs)
        } else {
            accumulator = reducer(accumulator, x, i++, xs)
        }
    }

    return accumulator
}


export default curry(reduce)