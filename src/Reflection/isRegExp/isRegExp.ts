const isRegExp = (x) =>
    x instanceof RegExp



export default isRegExp as {
    <T>(x: T | RegExp): x is RegExp
}
