import autocurry   from "Function/autocurry/autocurry"
import seq     from "Iterable/seq/seq"
import xfilter from "Transducer/xfilter/xfilter"
import Predicate from "Type/Predicate/Predicate"



const filter = (predicate, xs) =>
    seq(xfilter(predicate), xs)



export default autocurry(filter) as {
    <T, U extends Iterable<T>>(transformer: Predicate<T>, xs: U): U
    <T, U extends Iterable<T>>(transformer: Predicate<T>): (xs: U) => U
}
