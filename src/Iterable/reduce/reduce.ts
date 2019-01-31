import autocurry from "Function/autocurry/autocurry"
import isReduced from "Function/isReduced/isReduced"
import Reducer from "Type/Reducer/Reducer"



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



export default autocurry(reduce) as {
    <T, U>(reducer: Reducer<T, U>, accumulator: U, xs: Iterable<T>): U
    <T, U>(reducer: Reducer<T, U>, accumulator: U): (xs: Iterable<T>) => U
    <T, U>(reducer: Reducer<T, U>): (accumulator: U, xs: Iterable<T>) => U
    <T, U>(reducer: Reducer<T, U>): (accumulator: U) => (xs: Iterable<T>) => U
}
