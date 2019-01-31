const isElement = (x) =>
    x instanceof Element



export default isElement as {
    <T>(x: T | Element): x is Element
}

