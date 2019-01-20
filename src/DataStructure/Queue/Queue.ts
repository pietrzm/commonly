import identity from "Function/identity/identity"
import Reducible from "Protocol/Reducible"
import Accumulable from 'Protocol/Accumulable'

interface Queue<T> extends Iterable<T>, Accumulable<T>, Reducible<Queue<T>,T> {
    enqueue(value: T): number
    dequeue(): T
    peek(): T
    isEmpty(): boolean
    size(): number
    toArray(): T[]
}

namespace Queue {
    export function from<K>(...values: K[]): Queue<K> {
        const array = values.map(identity)
        return {
            enqueue: (value: K) => array.push(value),
            dequeue: () => array.shift(),
            peek: () => array[0],
            isEmpty: () => array.length === 0,
            size: () => array.length,
            toArray: () => array,
            [Symbol.iterator]: () => array[Symbol.iterator](),
            [Accumulable.accumulator]: () => Queue.from(...[] as K[]),
            [Reducible.reducer](akumulator: Queue<K>, value: K) {
                akumulator.enqueue(value)
                return akumulator
            }
        }
    }
}

export default Queue
