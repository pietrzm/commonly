import { curry } from "../../Function"


const find = (predicate, xs) => {
    for (const [ i, x ] of xs.entries()) {
        if (predicate(x, i)) {
            return x
        }
    }

    return undefined
}


export default curry(find)