import Queue from "DataStructure/Queue/Queue"
import BinaryTree from "DataStructure/BinaryTree/BinaryTree"

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
                [Symbol.iterator]: () => binaryTree[Symbol.iterator]()
            }
        }
    }
}

export default PriorityQueue
