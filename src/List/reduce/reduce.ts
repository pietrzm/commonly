import { curry } from "../../Function"


const reduce = (reducer, xs, initialValue) => {
    let accumulator = initialValue,
        i = 0

    for (const x of xs) {
        accumulator = reducer(accumulator, x, i++, xs)
    }

    return accumulator
}


export default curry(reduce)