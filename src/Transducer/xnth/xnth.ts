import reduced from "Function/reduced/reduced"
import Reduced from "Type/Reduced/Reduced"
import Transducer from "Type/Transducer/Transducer"



const xnth = <TAccumulator, TValue>
    (i: number): Transducer<TAccumulator, TAccumulator | Reduced<TValue>, TValue, TAccumulator | undefined> =>
        (xf) => {
            const state = {
                found: false,
                index: i
            }

            const transducer = (accumulator: TAccumulator, value: TValue) =>
                state.index-- === 0 ?
                    (state.found = true, reduced(value))
                    : accumulator

            transducer.completion = (accumulator: TAccumulator) =>
                state.found ?
                    xf.completion(accumulator)
                    : xf.completion(undefined)


            return transducer
        }



export default xnth
