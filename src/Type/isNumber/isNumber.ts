const isNumber = (x) =>
    typeof x === "number"



export default isNumber as {
    <T>(x: T | number): x is number
}
