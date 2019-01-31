const isNull = (x) =>
    x === null



export default isNull as {
    <T>(x: T | null): x is null
}
