import { curry } from "Function"



const push = (x, xs) =>
    (xs.push(x), xs)



export default curry(push)