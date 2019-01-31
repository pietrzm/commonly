import Accumulable from "Protocol/Accumulable"
import isArray from "Type/isArray/isArray"
import isString from "Type/isString/isString"



const seed = (xs) => {
    switch (true) {
        case isArray(xs):
            return []
        case isString(xs):
            return ""
        case Accumulable.accumulator in xs:
            return xs[Accumulable.accumulator]()
        case Symbol.species in xs:
            return xs[Symbol.species]()
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



export default seed as {
    <T>(xs: T): T
}
