import autocurry from "Function/autocurry/autocurry"
import into  from "Iterable/into/into"
import seed  from "Iterable/seed/seed"
import Transducer from "Type/Transducer/Transducer"



const seq = <TValue, TAccumulator>(xf: Transducer<TValue, TAccumulator>, xs: Iterable<TValue>): TAccumulator =>
    into(seed(xs) as any, xf, xs)



export default autocurry(seq) as {
    <TValue, TAccumulator>(xf: Transducer<TValue, TAccumulator>, xs: Iterable<TValue>): TAccumulator
    //<T, U, W>(xf: Reducer<T, U>): (xs: U) => W
}
