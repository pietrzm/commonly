const curry = (...fs) =>
	(...varargs) => {
		for (const f of fs) {
			if (f.length === varargs.length) {
				return f(...varargs)
			}
		}
	}



export default curry