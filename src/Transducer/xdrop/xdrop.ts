import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"
import Reducer from "Type/Reducer/Reducer"



const xdrop = (n, reducer) =>
    xslice(n, Infinity, reducer)



export default autocurry(xdrop) as {
    <T, U>(n: number, reducer: Reducer<U, T>): Reducer<U, T>
    <T, U>(n: number): (reducer: Reducer<U, T>) => Reducer<U, T>
}
