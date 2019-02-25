import reduced from "Function/reduced/reduced"
import Completing from "Type/Completing/Completing"
import Reducer from "Type/Reducer/Reducer"



const xslice = <TAccumulator, TValue>
    (i: number, j: number) =>
        (xf: Reducer<TAccumulator, TAccumulator, TValue> & Completing<TAccumulator, TAccumulator>) => {
            const state = {
               begin: i,
               end: j - i
            }

            const transducer = (accumulator: TAccumulator, value: TValue) => {
                if (state.begin-- > 0) {
                    return accumulator
                } else {
                    if (state.end-- === 0) {
                        return reduced(accumulator)
                    }

                    return xf(accumulator, value)
                }
            }

            transducer.completion = (accumulator: TAccumulator) =>
                xf.completion(accumulator)


            return transducer
        }



export default xslice
