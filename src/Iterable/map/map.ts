import autocurry from "Function/autocurry/autocurry"
import reducer from "Function/reducer/reducer"
import seq   from "Iterable/seq/seq"
import transduce from "Iterable/transduce/transduce"
import xmap  from "Transducer/xmap/xmap"



const map = (transformer, xs) =>
    transduce(xmap(transformer))(reducer.array)([], xs)



export default autocurry(map)