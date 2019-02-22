const isSet = <T>(value: T | Set<T>): value is Set<T> =>
    value instanceof Set



export default isSet

