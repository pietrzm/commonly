import { curry } from "../../Function"


const indexOf = (x, xs) =>
    xs.indexOf(x)


export default curry(indexOf)