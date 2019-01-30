import size from "Iterable/size/size"



const partial = (f, applied) => {
    const df = (...varargs) => {
        return f(...applied, ...varargs)
    }

    __copy_metadata(df, f, size(f) - size(applied))

    return df
}


const __copy_metadata = (df, f, n) => {
    Object.defineProperties(df, {
        name: {
            value: f.name,
            configurable: true,
            enumerable: false,
            writable: false
        },
        length: {
            value: n,
            configurable: true,
            enumerable: false,
            writable: false
        },
        toString: {
            value: () => f.toString(),
            configurable: true,
            enumerable: false,
            writable: true
        }
    })
}



export default partial
