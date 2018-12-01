import { curry } from "Function"
import { indexOf } from "List"



const includes = (x, xs) =>
    !!~indexOf(x, xs)



export default curry(includes)