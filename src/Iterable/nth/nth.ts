import seq from "Iterable/seq/seq"
import xnth from "Transducer/xnth/xnth"



const nth = (i, xs) =>
    seq(xnth(i), xs)



export default nth
