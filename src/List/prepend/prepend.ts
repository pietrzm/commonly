import { curry } from "../../Function"


const prepend = ( x, xs) =>
    [ x, ...xs ]


export default curry(prepend)