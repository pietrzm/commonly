import identity from "Function/identity/identity";

interface Stack<T> {
    push(value: T): number
    pop(): T
    peek(): T
    isEmpty(): boolean
    size(): number
    [Symbol.iterator](): Iterator<T>
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
            [Symbol.iterator]: () => array[Symbol.iterator]()
        }
    }
}

export default Stack
