import identity from "Function/identity/identity";

export default abstract class Queue<T> {

    abstract enqueue(value: T): number
    abstract dequeue(): T
    abstract peek(): T
    abstract isEmpty(): boolean
    abstract size(): number
    abstract [Symbol.iterator](): Iterator<T>

    static from<K>(...values: K[]): Queue<K> {
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
