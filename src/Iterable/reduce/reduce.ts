import autocurry from "Function/autocurry/autocurry"
import isReduced from "Function/isReduced/isReduced"
import Reducer from "Type/Reducer/Reducer"



const reduce = <TValue, TAccumulator>(reducer: Reducer<TValue, TAccumulator>, accumulator: TAccumulator, xs: Iterable<TValue>): TAccumulator => {
    let i = 0

    for (const x of xs) {
        accumulator = reducer(accumulator, x, i++)

        if (isReduced<TAccumulator>(accumulator)) {
            return accumulator.value
        }
    }

    return accumulator
}



export default autocurry(reduce) as {
    <TValue, TAccumulator>(reducer: Reducer<TValue, TAccumulator>, accumulator: TAccumulator, xs: Iterable<TValue>): TAccumulator
    <TValue, TAccumulator>(reducer: Reducer<TValue, TAccumulator>, accumulator: TAccumulator): (xs: Iterable<TValue>) => TAccumulator
    <TValue, TAccumulator>(reducer: Reducer<TValue, TAccumulator>): (accumulator: TAccumulator, xs: Iterable<TValue>) => TAccumulator
    <TValue, TAccumulator>(reducer: Reducer<TValue, TAccumulator>): (accumulator: TAccumulator) => (xs: Iterable<TValue>) => TAccumulator
}
