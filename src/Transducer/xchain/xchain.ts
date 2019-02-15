import autocurry from "Function/autocurry/autocurry"
import Reduced from "Protocol/Reduced"
import Mapper from "Type/Mapper/Mapper"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"
import castArray from "Type/castArray/castArray"



const xchain = <TValueA, TValueB, TAccumulator>
    (mapper: Mapper<TValueA, TValueB>): Transducer<TValueA, TValueB, TAccumulator> =>
        (reducer: Reducer<TValueB, TAccumulator>): Reducer<TValueA, TAccumulator> =>
            (accumulator: TAccumulator, value: TValueA, i: number): TAccumulator => {
                for (const x of castArray(mapper(value))) {
                    reducer(accumulator, x, i)
                }

                return accumulator
            }



export default autocurry(xchain) as {
    <T, U, R>(mapper: Mapper<T, R>, reducer: Reducer<U, T>): Reducer<U, R>
    <T, U, R>(mapper: Mapper<T, R>): (reducer: Reducer<U, T>) => Reducer<U, R>
}
