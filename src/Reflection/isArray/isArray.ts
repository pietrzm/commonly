const isArray = <T>(value: T | T[]): value is T[] =>
    Array.isArray(value)



export default isArray
