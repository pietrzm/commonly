import Completing from "Type/Completing/Completing"
import Reducer from "Type/Reducer/Reducer"



const xlast = <TAccumulator, TValue>
    (xf: Reducer<TAccumulator, TAccumulator, TValue> & Completing<TValue | undefined, TAccumulator>) => {
        const state: { element: TValue | undefined } = {
            element: undefined
        }

        const transducer = (accumulator: TAccumulator, value: TValue) =>
            xf(accumulator, state.element = value)

        transducer.completion = (accumulator: TAccumulator) =>
                xf.completion(state.element)


        return transducer
    }


export default xlast
