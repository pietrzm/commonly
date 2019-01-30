import isArray from "Type/isArray/isArray"



const castArray = <T>(x: T | T[]): T[] =>
    isArray(x) ?
        x : [ x ]



export default castArray as {
    <T>(x: T | T[]): T[]
}
