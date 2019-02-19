import autocurry from "Function/autocurry/autocurry"
import castArray from "Reflection/castArray/castArray"
import Mapper from "Type/Mapper/Mapper"
import Reducer from "Type/Reducer/Reducer"



const xchain = (mapper, reducer) =>
    (accumulator, value) => {
        for (const x of castArray(mapper(value))) {
            reducer(accumulator, x)
        }

        return accumulator
    }



export default autocurry(xchain) as {
    <T, U, R>(mapper: Mapper<T, R>, reducer: Reducer<U, T>): Reducer<U, R>
    <T, U, R>(mapper: Mapper<T, R>): (reducer: Reducer<U, T>) => Reducer<U, R>
}
