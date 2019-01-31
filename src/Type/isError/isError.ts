const isError = (x) =>
    x instanceof Error



export default isError as {
    <T>(x: T | Error): x is Error
}
