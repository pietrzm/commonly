import { curry } from "Function"
import { isReduced, deref } from "Function"



const reduce = (xf, accumulator, xs) => {
    let i = 0

    for (const x of xs) {
        accumulator = xf(accumulator, x, i++, xs)

        if (isReduced(accumulator)) {
            return deref(accumulator)
        }
    }

    return accumulator
}



export default curry(reduce)