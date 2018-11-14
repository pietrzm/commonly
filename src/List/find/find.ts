import { curry } from "../../Function"
import { filter, head } from "../../List"


const find = (predicate, xs) =>
    head(filter(predicate, xs))


export default curry(find)