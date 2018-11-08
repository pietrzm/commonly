import { curry } from "../../Function"
import { reduce, push } from "../../List"


const filter = (predicate, xs) =>
    reduce((ys, x) => (predicate(x) && push(x, ys), ys), xs, [])


export default curry(filter)