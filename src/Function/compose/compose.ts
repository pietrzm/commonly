import reduce from "List/reduce/reduce"
import identity from "Function/identity/identity"



const compose = (...functions) =>
    reduce((g, f) =>
	    (...varargs) => g(f(...varargs)), identity, functions)



export default compose