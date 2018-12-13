import size from "List/size/size"



const curry = (f) => {
	if (size(f) < 2) {
		return f
	}

	return curried.bind(null, f)
}

const curried = (f, ...varargs) => {
	if (size(varargs) >= size(f)) {
		return f(...varargs)
	} else {
		return curried.bind(null, f, ...varargs)
	}
}



export default curry