const isSymbol = <T>(value: T | Symbol): value is Symbol =>
    typeof value === "symbol"



export default isSymbol
