import curry from "Function/curry/curry"
import seq from "List/seq/seq"
import xmap from "Transducer/xmap/xmap"



const map = (transformer, xs) =>
    seq(xmap(transformer), xs)



export default curry(map)