import autocurry       from "Function/autocurry/autocurry"

import reducer   from "Function/reducer/reducer"
import transduce from "Iterable/transduce/transduce"
import Reducer from "Type/Reducer/Reducer"



const into = (accumulator, xf, xs) =>
    transduce(xf, reducer(accumulator), accumulator, xs)



export default autocurry(into) as {
    <T, U>(accumulator: U, xf: Reducer<U, T>, xs: Iterable<T>): U
    <T, U>(accumulator: U, xf: Reducer<U, T>): (xs: Iterable<T>) => U
    <T, U>(accumulator: U): (xf: Reducer<U, T>, xs: Iterable<T>) => U
    <T, U>(accumulator: U): (xf: Reducer<U, T>) => (xs: Iterable<T>) => U
}
