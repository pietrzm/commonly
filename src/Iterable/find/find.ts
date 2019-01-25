import autocurry from "Function/autocurry/autocurry"
import into  from "Iterable/into/into"
import xfind from "Transducer/xfind/xfind"



const find = (predicate, xs) =>
    into(undefined, xfind(predicate), xs)



export default autocurry(find)