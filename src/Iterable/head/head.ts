import seq from "Iterable/seq/seq"
import xhead from "Transducer/xhead/xhead"



const head = (xs) =>
    seq(xhead, xs)



export default head
