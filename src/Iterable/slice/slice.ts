import autocurry from "Function/autocurry/autocurry"
import seq from "Iterable/seq/seq"
import xslice from "Transducer/xslice/xslice"



const slice = <T>(i: number, j: number, xs: Iterable<T>): Iterable<T> =>
    seq(xslice(i, j), xs)



export default autocurry(slice) as {
    <T>(i: number, j: number, xs: Iterable<T>): Iterable<T>
    <T>(i: number, j: number): (xs: Iterable<T>) => Iterable<T>
}
