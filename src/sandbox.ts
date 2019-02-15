import drop from "Iterable/drop/drop"
import filter from "Iterable/filter/filter"
import find from "Iterable/find/find"
import map from "Iterable/map/map"
import isArray from "Type/isArray/isArray"


class Dummy<E> implements Iterable<E> {
    [Symbol.iterator](): Iterator<E> {
        return undefined
    }
}

const xs: boolean = drop(1, [ 1, 2 ])
