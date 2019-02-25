import castArray from "Reflection/castArray/castArray"
import Completing from "Type/Completing/Completing"
import Reducer from "Type/Reducer/Reducer"



const xflatten = <TAccumulator, TValue>
    (xf: Reducer<TAccumulator, TAccumulator, TValue> & Completing<TAccumulator, TAccumulator>) => {
        const transducer = (accumulator: TAccumulator, value: TValue) => {
            for (const x of castArray(value)) {
                xf(accumulator, x)
            }

            return accumulator
        }

        transducer.completion = (accumulator: TAccumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xflatten
