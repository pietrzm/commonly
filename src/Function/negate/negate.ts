const negate = (f: (...varargs) => boolean) =>
    (...varargs): boolean =>
        !f(...varargs)



export default negate
