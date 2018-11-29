import { curry, reduced } from "../../Function"



const xfind = (predicate, _) => (accumulator, x) =>
    predicate(x) ?
        reduced(x)
        : undefined



export default curry(xfind)