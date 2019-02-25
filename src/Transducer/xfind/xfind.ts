import reduced from "Function/reduced/reduced"
import Predicate from "Type/Predicate/Predicate"
import Reduced from "Type/Reduced/Reduced"
import Transducer from "Type/Transducer/Transducer"



const xfind = <TAccumulator, TValue>
    (predicate: Predicate<TValue>): Transducer<TAccumulator, TAccumulator | Reduced<TValue>, TValue, TAccumulator | undefined> =>
        (xf) => {
            const state = {
                found: false
            }

            const transducer = (accumulator: TAccumulator, value: TValue) =>
                predicate(value) ?
                    (state.found = true, reduced(value))
                    : accumulator

            transducer.completion = (accumulator: TAccumulator) =>
                state.found ?
                    xf.completion(accumulator)
                    : xf.completion(undefined)


            return transducer
        }



export default xfind
