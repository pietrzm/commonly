const isRegExp = <T>(value: T | RegExp): value is RegExp =>
    value instanceof RegExp



export default isRegExp
