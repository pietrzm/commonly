import isObject from "Reflection/isObject/isObject"
import Reduced from "Type/Reduced/Reduced"



const isReduced = <T>(value: T | Reduced<T>): value is Reduced<T> =>
    isObject(value) && value.hasOwnProperty("reduced")



export default isReduced
