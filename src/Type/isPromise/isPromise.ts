const isPromise = (x) =>
    x === Promise.resolve(x)



export default isPromise as {
    <T>(x: T | Promise<T>): x is Promise<T>
}
