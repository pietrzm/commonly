import curry from "Function/curry/curry"
import into from "List/into/into"
import xfind from "Transducer/xfind/xfind"



const find = (predicate, xs) =>
    into(undefined, xfind(predicate), xs)



export default curry(find)