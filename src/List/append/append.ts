import { curry } from "Function"



const append = (x, xs) =>
    [ ...xs, x ]



export default curry(append)