import seq from "Iterable/seq/seq"
import xlast from "Transducer/xlast/xlast"



const last = (xs) =>
    seq(xlast, xs)



export default last
