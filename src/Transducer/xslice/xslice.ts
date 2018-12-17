import curry from "Function/curry/curry"
import reduced from "Function/reduced/reduced"



const xslice = (a, b, reducer) => (accumulator, x) => {
    if (b === 0) {
        return reduced(accumulator)
    }

    if (a > 0) {
        a--
        b--
        return accumulator
    } else {
        const reduction = reducer(accumulator, x)

        if (b > 1) {
            b--
            return reduction
        } else {
            return reduced(reduction)
        }
    }
}



export default curry(xslice)