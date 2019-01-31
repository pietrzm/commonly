import autocurry from "Function/autocurry/autocurry"
import into  from "Iterable/into/into"
import seed  from "Iterable/seed/seed"
import Reducer from "Type/Reducer/Reducer"



const seq = (xf, xs) =>
    into(seed(xs), xf, xs)



export default autocurry(seq) as {
    <T, U, W>(xf: Reducer<T, U>, xs: U): W
    <T, U, W>(xf: Reducer<T, U>): (xs: U) => W
}
