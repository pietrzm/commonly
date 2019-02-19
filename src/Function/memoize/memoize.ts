const memoize = (f: (...varargs) => void): (...varargs) => void => {
    const cache = new WeakMap()

    return (...varargs) => {
        if (cache.has(varargs[0])) {
            return cache.get(varargs[0])
        } else {
            const v = f(...varargs)
            cache.set(varargs[0], v)
            return v
        }
    }
}



export default memoize
