import reduce from "List/reduce/reduce"
import identity from "Function/identity/identity"



const compose = (...functions) => {
	const [ first = identity, ...rest ] = functions
	return reduce((g, f) =>
		(...varargs) => g(f(...varargs)), first, rest)
}



export default compose