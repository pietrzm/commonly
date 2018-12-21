import curry from "Function/curry/curry"
import isReduced from "Function/isReduced/isReduced"



const reduce = (reducer, accumulator, xs) => {
    let i = 0

    for (const x of xs) {
        accumulator = reducer(accumulator, x, i++, xs)

        if (isReduced(accumulator)) {
            return accumulator.value
        }
    }

    return accumulator
}



export default curry(reduce)