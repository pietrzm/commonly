import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"
import Reducer from "Type/Reducer/Reducer"



const xincludes = (x, reducer) =>
    (accumulator, value) =>
        x === value ?
            reduced(true)
            : false



export default autocurry(xincludes) as {
    <T>(x: T, reducer: Reducer<any, T>): Reducer<T, boolean>
    <T>(x: T): (reducer: Reducer<any, T>) => Reducer<T, boolean>
}
