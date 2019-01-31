import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"
import Predicate from "Type/Predicate/Predicate"
import Reducer from "Type/Reducer/Reducer"



const xfind = (predicate, reducer) =>
    (accumulator, value) =>
        predicate(value) ?
            reduced(value)
            : undefined



export default autocurry(xfind) as {
    <T, U>(predicate: Predicate<T>, reducer: Reducer<any, T>): Reducer<T, T | undefined>
    <T, U>(predicate: Predicate<T>): (reducer: Reducer<any, T>) => Reducer<T, T | undefined>
}
