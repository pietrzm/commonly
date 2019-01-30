import isArray from "Type/isArray/isArray"



const castArray = (x) =>
    isArray(x) ?
        x : [ x ]



export default castArray
