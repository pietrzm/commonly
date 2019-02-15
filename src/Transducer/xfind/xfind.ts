import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"
import Reduced from "Protocol/Reduced"
import Predicate from "Type/Predicate/Predicate"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"



const xfind = <TValue, TAccumulator>
    (predicate: Predicate<TValue>): Transducer<TValue, TValue, TAccumulator, Reduced<TValue>> =>
        (reducer: Reducer<TValue, TAccumulator, TAccumulator>): Reducer<TValue, TAccumulator, Reduced<TValue>> =>
            (accumulator: TAccumulator, value: TValue, i: number): TAccumulator | Reduced<TValue> =>
                predicate(value) ?
                    reduced(value)
                    : accumulator



export default xfind
