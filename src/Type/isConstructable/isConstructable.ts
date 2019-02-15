import Constructable from "Type/Constructable/Constructable"
import isFunction from "Type/isFunction/isFunction"
import isObject from "Type/isObject/isObject"



const isConstructable = <T>(value: T | Constructable<T>): value is Constructable<T> =>
    isObject(value) && isFunction(value) && value.hasOwnProperty("constructor")



export default isConstructable
