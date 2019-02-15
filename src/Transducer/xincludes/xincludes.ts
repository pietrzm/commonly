import reduced from "Function/reduced/reduced"
import Reduced from "Protocol/Reduced"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"



const xincludes = <TValue, TAccumulator>
    (x: TValue): Transducer<TValue, TValue, false, Reduced<true>> =>
        (reducer: Reducer<TValue, false, TAccumulator>): Reducer<TValue, false, Reduced<true>> =>
            (accumulator: false, value: TValue, i: number): false | Reduced<true> =>
                x === value ?
                    reduced(true)
                    : false



export default xincludes
