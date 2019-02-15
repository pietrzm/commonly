import autocurry  from "Function/autocurry/autocurry"
import reduce from "Iterable/reduce/reduce"
import Reducer from "Type/Reducer/Reducer"
import Transducer from "Type/Transducer/Transducer"



const transduce = <TValue, TAccumulator>(xf: Transducer<TValue, TAccumulator>, reducer: Reducer<TValue, TAccumulator>, accumulator: TAccumulator, xs: Iterable<TValue>): TAccumulator =>
    reduce(xf(reducer), accumulator, xs)



export default autocurry(transduce) as {
    <TValue, TAccumulator>(xf: Transducer<TValue, TAccumulator>, reducer: Reducer<TValue, TAccumulator>, accumulator: TAccumulator, xs: Iterable<TValue>): TAccumulator
}
