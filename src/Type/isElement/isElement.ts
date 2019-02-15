const isElement = <T>(value: T | Element): value is Element =>
    value instanceof Element



export default isElement

