import autocurry from "Function/autocurry/autocurry"
import seq from "Iterable/seq/seq"
import xtake from "Transducer/xtake/xtake"



const take = <T>(n: number, xs: Iterable<T>): Iterable<T> =>
    seq(xtake(n), xs)



export default autocurry(take) as {
    <T>(n: number, xs: Iterable<T>): Iterable<T>
    <T>(n: number): (xs: Iterable<T>) => Iterable<T>
}
