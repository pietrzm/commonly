import Mapper from "Type/Mapper/Mapper"
import Transducer from "Type/Transducer/Transducer"



const xmap = <TAccumulator, TValueA, TValueB>
    (mapper: Mapper<TValueA, TValueB>): Transducer<TAccumulator, TAccumulator, TValueA, TAccumulator, TAccumulator, TValueB> =>
        (xf) => {
            const transducer = (accumulator: TAccumulator, value: TValueA) =>
                xf(accumulator, mapper(value))

            transducer.completion = (accumulator: TAccumulator) =>
                xf.completion(accumulator)


            return transducer
        }



export default xmap
