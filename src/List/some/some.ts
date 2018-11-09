import { curry } from "../../Function"
import { reduce } from "../../List"
import { or } from "../../Logic"


const some = (predicate, xs) =>
    reduce((dx, x, i) => or(dx, predicate(x, i)), xs, false)


export default curry(some)