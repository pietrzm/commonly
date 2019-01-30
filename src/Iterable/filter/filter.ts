import autocurry   from "Function/autocurry/autocurry"
import seq     from "Iterable/seq/seq"
import xfilter from "Transducer/xfilter/xfilter"



const filter = (predicate, xs) =>
    seq(xfilter(predicate), xs)



export default autocurry(filter)
