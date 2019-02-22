const isPromise = <T>(value: T | Promise<T>): value is Promise<T> =>
    value === Promise.resolve(value)



export default isPromise
