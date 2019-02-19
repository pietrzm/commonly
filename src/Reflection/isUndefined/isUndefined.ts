const isUndefined = (x) =>
    x === undefined



export default isUndefined as {
    <T>(x: T | undefined): x is undefined
}
