import seq from "Iterable/seq/seq"
import xtail from "Transducer/xtail/xtail"



const tail = <T>(xs: Iterable<T>): Iterable<T> =>
    seq(xtail, xs)



export default tail
