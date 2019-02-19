const isFunction = (x) =>
    typeof x === "function"



export default isFunction as {
    <T>(x: T | Function): x is Function
}

