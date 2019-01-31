import autocurry from "Function/autocurry/autocurry"
import xslice from "Transducer/xslice/xslice"
import Reducer from "Type/Reducer/Reducer"



const xtail = (reducer) =>
    xslice(1, Infinity, reducer)



export default autocurry(xtail) as {
    <T, U>(reducer: Reducer<U, T>): Reducer<U, T>
}
