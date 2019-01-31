import autocurry from "Function/autocurry/autocurry"
import Predicate from "Type/Predicate/Predicate"
import Reducer from "Type/Reducer/Reducer"



const xfilter = (predicate, reducer) =>
    (accumulator, value) =>
        predicate(value) ?
            reducer(accumulator, value)
            : accumulator



export default autocurry(xfilter) as {
    <T, U>(predicate: Predicate<T>, reducer: Reducer<any, T>): Reducer<U, T>
    <T, U>(predicate: Predicate<T>): (reducer: Reducer<any, T>) => Reducer<U, T>
}
