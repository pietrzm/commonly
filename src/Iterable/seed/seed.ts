import isArray from "Type/isArray/isArray"
import isString from "Type/isString/isString"
import Accumulable from 'Protocol/Accumulable'



const seed = xs => {
    switch (true) {
        case isArray(xs):
            return []
        case isString(xs):
            return ""
        case Accumulable.accumulator in xs:
            return xs[Accumulable.accumulator]()
        default:
            return new (xs.constructor)()
    }
}


// TODO: Rethink this implementation
    // cases([
    //     when(isArray,
    //         () => []),
    //     when(isString,
    //         () => ""),
    //     xs =>
    //         new xs.constructor()
    // ], xs)



export default seed