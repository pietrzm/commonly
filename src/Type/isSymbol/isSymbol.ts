const isSymbol = (x) =>
    typeof x === "symbol"



export default isSymbol as {
    <T>(x: T | Symbol): x is Symbol
}
