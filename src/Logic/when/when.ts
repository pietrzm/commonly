import { curry } from "../../Function"


const when = (predicate, transformer, x) => {
    if (predicate(x)) {
        return transformer(x)
    }
}


export default curry(when)