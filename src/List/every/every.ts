import { curry } from "../../Function"
import { reduce } from "../../List"
import { and } from "../../Logic"


const every = (predicate, xs) =>
    reduce((dx, x, i) => and(dx, predicate(x, i)), true, xs)


export default curry(every)