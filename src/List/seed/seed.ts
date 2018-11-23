import { isArray, isString } from "../../Type"
import { cases, when } from "../../Logic"



const seed = xs =>
    cases([
        when(isArray,
            () => []),
        when(isString,
            () => ""),
        xs =>
            new xs.constructor()
    ], xs)


export default seed