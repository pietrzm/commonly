import autocurry from "Function/autocurry/autocurry"
import into  from "Iterable/into/into"
import xfind from "Transducer/xfind/xfind"
import Predicate from "Type/Predicate/Predicate"



const find = <T>(predicate: Predicate<T>, xs: Iterable<T>): T | undefined =>
    into(undefined, xfind(predicate), xs)



export default autocurry(find) as {
    <T>(transformer: Predicate<T>, xs: Iterable<T>): T | undefined
}
