import Reduced from "Protocol/Reduced"
import isObject from "Type/isObject/isObject"



const isReduced = <T>(value: T | Reduced<T>): value is Reduced<T> =>
    isObject(value) && value[Reduced.reduced]



export default isReduced as {
    <T>(value: T | Reduced<T>): value is Reduced<T>
}
