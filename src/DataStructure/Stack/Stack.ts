import identity from "Function/identity/identity"
import Accumulable from "Protocol/Accumulable"
import Reducible from "Protocol/Reducible"

interface Stack<T> extends Iterable<T>, Accumulable<T>, Reducible<Stack<T>, T> {
    push(value: T): number
    pop(): T
    peek(): T
    isEmpty(): boolean
    size(): number
    toArray(): T[]
}

namespace Stack {
    export function from<K>(...values: K[]): Stack<K> {
        const array = values.map(identity)
        return {
            push: (value: K) => array.push(value),
            pop: () => array.pop(),
            peek: () => array[array.length - 1],
            isEmpty: () => array.length === 0,
            size: () => array.length,
            toArray: () => array,
            [Symbol.iterator]: () => array[Symbol.iterator](),
            [Accumulable.accumulator]: () => Stack.from(...[] as K[]),
            [Reducible.reducer](accumulator: Stack<K>, value: K) {
                accumulator.push(value)
                return accumulator
            }
        }
    }
}

export default Stack
