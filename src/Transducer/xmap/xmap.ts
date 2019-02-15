import Mapper from "Type/Mapper/Mapper"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"



const xmap = <TValueA, TValueB, TAccumulator>
    (mapper: Mapper<TValueA, TValueB>): Transducer<TValueA, TValueB, TAccumulator, TAccumulator> =>
        (reducer: Reducer<TValueB, TAccumulator, TAccumulator>): Reducer<TValueA, TAccumulator, TAccumulator> =>
            (accumulator: TAccumulator, value: TValueA, i: number): TAccumulator =>
                reducer(accumulator, mapper(value), i)


export default xmap
