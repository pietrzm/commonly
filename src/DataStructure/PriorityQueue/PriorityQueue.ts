import Queue from "DataStructure/Queue/Queue"
import BinaryTree from "DataStructure/BinaryTree/BinaryTree"
import Reducible from "Protocol/Reducible"
import Accumulable from "Protocol/Accumulable"

interface PriorityQueue<T> extends Queue<T> { }

namespace PriorityQueue {
    export function from<K>(...values: K[]): (comparator?: (a: K, b: K) => boolean) => PriorityQueue<K> {
        return (comparator: (a: K, b: K) => boolean = (a, b) => a > b) => {
            const binaryTree = new BinaryTree(comparator)
            values.forEach(v => binaryTree.add(v))
            return {
                enqueue: (value: K) => {
                    binaryTree.add(value)
                    return binaryTree.size()
                },
                dequeue: () => {
                    const max = binaryTree.max()
                    binaryTree.remove(max)
                    return max
                },
                peek: () => binaryTree.max(),
                isEmpty: () => binaryTree.isEmpty(),
                size: () => binaryTree.size(),
                toArray: () => binaryTree.toArray(),
                [Symbol.iterator]: () => binaryTree[Symbol.iterator](),
                [Accumulable.accumulator]: () => PriorityQueue.from(...[] as K[])(),
                [Reducible.reducer](accumulator: PriorityQueue<K>, value: K) {
                    accumulator.enqueue(value)
                    return accumulator
                }
            }
        }
    }
}

export default PriorityQueue
