import { curry } from "../../Function"


const reduce = (reducer, accumulator, xs) => {
    let i = 0

    for (const x of xs) {
        accumulator = reducer(accumulator, x, i++, xs)
    }

    return accumulator
}


export default curry(reduce)