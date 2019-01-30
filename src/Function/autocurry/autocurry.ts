import partial from "Function/partial/partial"
import size from "Iterable/size/size"



const autocurry = (f) => {
    if (size(f) < 2) {
        return f
    }

    const df = partial(__curried, [ f ])
    __copy_metadata(df, f, size(f))

    return df
}


const __curried = (f, ...varargs) => {
    if (size(varargs) >= size(f)) {
        return f(...varargs)
    } else {
        const df = partial(__curried, [ f, ...varargs ])
        __copy_metadata(df, f, size(f) - size(varargs))

        return df
    }
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



export default autocurry
