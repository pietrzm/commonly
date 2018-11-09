import { curry } from "../../Function"
import { filter } from "../../List"


const find = (predicate, xs) =>
    filter(predicate, xs)[0]


export default curry(find)