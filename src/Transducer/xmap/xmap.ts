import autocurry from "Function/autocurry/autocurry"
import Mapper from "Type/Mapper/Mapper"
import Reducer from "Type/Reducer/Reducer"



const xmap = (mapper, reducer) =>
    (accumulator, value) =>
        reducer(accumulator, mapper(value))



export default autocurry(xmap) as {
    <T, U, R>(mapper: Mapper<T, R>, reducer: Reducer<U, T>): Reducer<U, R>
    <T, U, R>(mapper: Mapper<T, R>): (reducer: Reducer<U, T>) => Reducer<U, R>
}
