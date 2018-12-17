import curry from "Function/curry/curry"
import isReduced from "Function/isReduced/isReduced"



const reduce = (xf, accumulator, xs) => {
    let i = 0

    for (const x of xs) {
        accumulator = xf(accumulator, x, i++, xs)

        if (isReduced(accumulator)) {
            return accumulator.value
        }
    }

    return accumulator
}



export default curry(reduce)