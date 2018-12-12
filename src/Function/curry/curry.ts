import size from "List/size/size"



const curry = (f) => {
	const arity = size(f)

	if (arity < 2) {
		return f
	}

	return function partial(...varargs) {
		return (size(varargs) >= arity) ?
			f(...varargs)
			: (...rest) =>
				partial(...varargs.concat(rest))
	}
}



export default curry