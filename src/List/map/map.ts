import { curry } from "../../Function"
import { reduce, push } from "../../List"


const map = (mapper, xs) =>
    reduce((ys, x, i) => push((mapper(x, i)), ys), [], xs)


export default curry(map)