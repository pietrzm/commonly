import { curry } from "../../Function"
import { reduce } from "../../List"
import { or } from "../../Logic"


const some = (predicate, xs) =>
    reduce((dx, x, i) => or(dx, predicate(x, i)), false, xs)


export default curry(some)