import reduced from "Function/reduced/reduced"
import Reduced from "Type/Reduced/Reduced"
import Transducer from "Type/Transducer/Transducer"



const xincludes = <TAccumulator, TValue>
    (needle: TValue): Transducer<TAccumulator, false | Reduced<boolean>, TValue, TAccumulator | false> =>
        (xf) => {
            const state = {
                found: false
            }

            const transducer = (accumulator: TAccumulator, value: TValue) =>
                needle === value &&
                    (state.found = true, reduced(true))

            transducer.completion = (accumulator: TAccumulator) =>
                state.found ?
                    xf.completion(accumulator)
                    : xf.completion(false)


            return transducer
        }



export default xincludes
