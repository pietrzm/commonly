import { curry } from "Function"



const indexOf = (y, xs) => {
    for (const [ i, x ] of xs.entries()) {
        if (x === y) {
            return i
        }
    }

    return -1
}



export default curry(indexOf)