import { curry } from "../../Function"


const includes = (x, xs) =>
    !!~xs.indexOf(x)


export default curry(includes)