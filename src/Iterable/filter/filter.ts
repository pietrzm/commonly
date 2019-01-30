import autocurry   from "Function/autocurry/autocurry"
import seq     from "Iterable/seq/seq"
import xfilter from "Transducer/xfilter/xfilter"
import Predicate from "Type/Predicate/Predicate"



const filter = <T, U extends Iterable<T>>(predicate: Predicate<T>, xs: U): U =>
    seq(xfilter(predicate), xs)



export default autocurry(filter) as {
    <T, U>(transformer: Predicate<T>, xs: U): U
}
