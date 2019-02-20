import autocurry  from "Function/autocurry/autocurry"
import completing from "Function/completing/completing"
import reduce from "Iterable/reduce/reduce"
import Reducer from "Type/Reducer/Reducer"



const transduce = (xf, reducer, accumulator, xs) =>
    reduce(xf(completing(reducer)), accumulator, xs)



export default autocurry(transduce) as {
    <T, U>(xf: Reducer<U, T>, reducer: Reducer<U, T>, accumulator: U, xs: Iterable<T>): U
    <T, U>(xf: Reducer<U, T>, reducer: Reducer<U, T>, accumulator: U): (xs: Iterable<T>) => U
    <T, U>(xf: Reducer<U, T>, reducer: Reducer<U, T>): (accumulator: U, xs: Iterable<T>) => U
    <T, U>(xf: Reducer<U, T>): (reducer: Reducer<U, T>, accumulator: U, xs: Iterable<T>) => U
    <T, U>(xf: Reducer<U, T>): (reducer: Reducer<U, T>, accumulator: U, xs: Iterable<T>) => U
}
