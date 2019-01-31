import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"
import Reducer from "Type/Reducer/Reducer"



const xtake = (n, reducer) =>
    xslice(0, n, reducer)



export default autocurry(xtake) as {
    <T, U>(n: number, reducer: Reducer<U, T>): Reducer<U, T>
    <T, U>(n: number): (reducer: Reducer<U, T>) => Reducer<U, T>
}
