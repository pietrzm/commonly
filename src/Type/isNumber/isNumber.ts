const isNumber = <T>(value: T | number): value is number =>
    typeof value === "number"



export default isNumber
