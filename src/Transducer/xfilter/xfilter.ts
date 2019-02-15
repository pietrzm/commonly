import Predicate from "Type/Predicate/Predicate"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"



const xfilter = <TValue, TAccumulator>
    (predicate: Predicate<TValue>): Transducer<TValue, TValue, TAccumulator, TAccumulator> =>
        (reducer: Reducer<TValue, TAccumulator, TAccumulator>): Reducer<TValue, TAccumulator, TAccumulator> =>
            (accumulator: TAccumulator, value: TValue, i: number): TAccumulator  =>
                predicate(value) ?
                    reducer(accumulator, value, i)
                    : accumulator



export default xfilter
