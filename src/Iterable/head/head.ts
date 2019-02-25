import seq from "Iterable/seq/seq"
import xhead from "Transducer/xhead/xhead"



const head = <T>(xs: Iterable<T>): T | undefined =>
    seq(xhead, xs)



export default head
