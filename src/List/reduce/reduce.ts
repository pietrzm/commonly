import { curry } from "../../Function"



const reduce = (xf, accumulator, xs) => {
    let i = 0

    for (const x of xs) {
        accumulator = xf(accumulator, x, i++, xs)
    }

    return accumulator
}



export default curry(reduce)