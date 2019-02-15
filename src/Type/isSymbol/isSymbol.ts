const isSymbol = <T>(value: T | symbol): value is symbol =>
    typeof value === "symbol"



export default isSymbol
