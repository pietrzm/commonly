import autocurry from "Function/autocurry/autocurry"
import reduced from "Function/reduced/reduced"
import Reducer from "Type/Reducer/Reducer"



const xslice = (i, j, reducer) => {
    j = j - i

    return (accumulator, value) => {
        if (i-- > 0) {
            return accumulator
        } else {
            if (j-- === 0) {
                return reduced(accumulator)
            }

            return reducer(accumulator, value)
        }
    }
}



export default autocurry(xslice) as {
    <T, U>(i: number, j: number, reducer: Reducer<U, T>): U
    <T, U>(i: number): (j: number, reducer: Reducer<U, T>) => U
    <T, U>(i: number, j: number): (reducer: Reducer<U, T>) => U
    <T, U>(i: number): (j: number) => (reducer: Reducer<U, T>) => U
}
