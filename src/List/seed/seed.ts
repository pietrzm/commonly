import { isArray, isString } from "../../Type"

const seed = (xs) => {
    switch (true) {
        case isArray(xs):
            return []
        case isString(xs):
            return ""
        default:
            return new xs.constructor()
    }
}


export default seed