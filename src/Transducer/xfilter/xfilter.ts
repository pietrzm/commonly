import Predicate from "Type/Predicate/Predicate"
import Transducer from "Type/Transducer/Transducer"



const xfilter = <TAccumulator, TValue>(predicate: Predicate<TValue>): Transducer<TAccumulator, TAccumulator, TValue> =>
    (xf) => {
        const transducer = (accumulator: TAccumulator, value: TValue) =>
            predicate(value) ?
                xf(accumulator, value)
                : accumulator

        transducer.completion = (accumulator: TAccumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xfilter
