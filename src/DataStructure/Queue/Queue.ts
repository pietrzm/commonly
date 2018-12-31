import identity from "Function/identity/identity";

interface Queue<T> {
    enqueue(value: T): number
    dequeue(): T
    peek(): T
    isEmpty(): boolean
    size(): number
    [Symbol.iterator](): Iterator<T>
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
            [Symbol.iterator]: () => array[Symbol.iterator]()
        }
    }
}

export default Queue
