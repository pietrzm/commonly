import { curry } from "Function"



const cases = (fs, x) => {
    for (const f of fs) {
        const fx = f(x)
        if (fx) {
            return fx
        }
    }
}



export default curry(cases)