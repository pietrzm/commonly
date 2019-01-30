import identity from "Function/identity/identity"
import reduce   from "Iterable/reduce/reduce"



const compose = (...functions) => {
    const [ first = identity, ...rest ] = functions
    return reduce((g, f) =>
        (...varargs) => g(f(...varargs)), first, rest)
}



export default compose
