const isFunction = <T>(value: T | Function): value is Function =>
    typeof value === "function"



export default isFunction
