const isArray = <T>(x: T | T[]) =>
    Array.isArray(x)



export default isArray as {
    <T>(x: T | T[]): x is T[]
}
