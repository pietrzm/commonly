import Reducible   from "Protocol/Reducible"

import identity    from "Function/identity/identity"
import isBoolean from "Reflection/isBoolean/isBoolean"

import isArray     from "Reflection/isArray/isArray"
import isMap       from "Reflection/isMap/isMap"
import isSet       from "Reflection/isSet/isSet"
import isString    from "Reflection/isString/isString"
import isUndefined from "Reflection/isUndefined/isUndefined"



/**
 * Returns a reducing function for a given iterable.
 *
 * Function exposes explicitly following reducers:
 * * reducer.undefined  - Reducer acting as identity function
 * * reducer.array      - Reducer for Array's
 * * reducer.string     - Reducer for String's
 * * reducer.set        - Reducer for Set's
 * * reducer.map        - Reducer for Map's
 *
 * @param {Iterable} xs
 * @returns {(accumulator, value) => *}
 */
const reducer = (xs) => {
    switch (true) {
        case isUndefined(xs):
            return reducer.undefined

        case isBoolean(xs):
            return reducer.boolean

        case isArray(xs):
            return reducer.array

        case isString(xs):
            return reducer.string

        case isSet(xs):
            return reducer.set

        case isMap(xs):
            return reducer.map

        case Reducible.reducer in xs:
            return xs[ Reducible.reducer ]
    }
}


reducer.undefined = identity

reducer.boolean = identity

reducer.array = (xs, x) => (xs.push(x), xs)

reducer.string = (xs, x) => xs + x

reducer.map = (xs, kx) => xs.set(kx[0], kx[1])

reducer.set = (xs, x) => xs.add(x)



export default reducer
