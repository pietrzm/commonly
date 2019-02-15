import autocurry       from "Function/autocurry/autocurry"

import reducer   from "Function/reducer/reducer"
import transduce from "Iterable/transduce/transduce"
import Transducer from "Type/Transducer/Transducer"



const into = <TValue, TAccumulator>(accumulator: TAccumulator, xf: Transducer<TValue, TAccumulator>, xs: Iterable<TValue>): TAccumulator =>
    transduce(xf, reducer(accumulator), accumulator, xs)



export default autocurry(into) as {
    <TValue, TAccumulator>(accumulator: TAccumulator, xf: Transducer<TValue, TAccumulator>, xs: Iterable<TValue>): TAccumulator
    //<T, U>(accumulator: U, xf: Reducer<U, T>): (xs: Iterable<T>) => U
    //<T, U>(accumulator: U): (xf: Reducer<U, T>, xs: Iterable<T>) => U
    //<T, U>(accumulator: U): (xf: Reducer<U, T>) => (xs: Iterable<T>) => U
}
