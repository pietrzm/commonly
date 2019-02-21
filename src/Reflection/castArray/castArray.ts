import isArray from "Reflection/isArray/isArray"



const castArray = (x) =>
    isArray(x) ?
        x : [ x ]



export default castArray as {
    <T>(x: T | T[]): T[]
}