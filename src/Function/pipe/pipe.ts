import reduce from "List/reduce/reduce"
import identity from "Function/identity/identity"



const pipe = (...functions) => {
	const [ first = identity, ...rest ] = functions.reverse()
	return reduce((g, f) =>
		(...varargs) => g(f(...varargs)), first, rest)
}



export default pipe