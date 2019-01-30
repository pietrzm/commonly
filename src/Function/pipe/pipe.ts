import identity from "Function/identity/identity"
import reduce   from "Iterable/reduce/reduce"



const pipe = (...functions) => {
    const [ first = identity, ...rest ] = functions.reverse()
    return reduce((g, f) =>
        (...varargs) => g(f(...varargs)), first, rest)
}



export default pipe
