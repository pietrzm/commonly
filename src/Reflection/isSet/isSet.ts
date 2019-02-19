const isSet = (x) =>
    x instanceof Set



export default isSet as {
    <T>(x: T | Set<T>): x is Set<T>
}

