import isArray from "Type/isArray/isArray"



const castArray = <T>(value: T | T[]): T[] =>
    isArray(value) ?
        value : [ value ]



export default castArray
