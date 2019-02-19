import isNull from "Reflection/isNull/isNull"

export default class BinaryTreeNode<T> {

    comparator: (a: T, b: T) => boolean
    value: T
    parent: BinaryTreeNode<T> = null
    left: BinaryTreeNode<T> = null
    right: BinaryTreeNode<T> = null

    constructor(value: T, comparator: (a: T, b: T) => boolean, parent: BinaryTreeNode<T> = null) {
        this.value = value
        this.comparator = comparator
        this.parent = parent
    }

    add(value: T) {
        if (this.comparator(this.value, value)) {
            if (isNull(this.left)) {
                this.left = new BinaryTreeNode(value, this.comparator, this)
            } else {
                this.left.add(value)
            }
        } else {
            if (isNull(this.right)) {
                this.right = new BinaryTreeNode(value, this.comparator, this)
            } else {
                this.right.add(value)
            }
        }
        return value
    }

    remove(value: T) {
        if (!isNull(this.left)) {
            if (this.left.isValueEqual(value)) {
                const leftDepth = !isNull(this.left.left) ? this.left.left.depth() : 0
                const rightDepth = !isNull(this.left.right) ? this.left.right.depth() : 0

                if (!leftDepth || !rightDepth) {
                    this.left = leftDepth >= rightDepth ? this.left.left : this.left.right
                } else {
                    const min = this.left.right.min()
                    this.left.value = min.value
                    min.parent.remove(min.value)
                }
            } else {
                this.left.remove(value)
            }
        }
        if (!isNull(this.right)) {
            if (this.right.isValueEqual(value)) {
                const leftDepth = !isNull(this.right.left) ? this.right.left.depth() : 0
                const rightDepth = !isNull(this.right.right) ? this.right.right.depth() : 0

                if (!leftDepth || !rightDepth) {
                    this.right = leftDepth >= rightDepth ? this.right.left : this.right.right
                } else {
                    const min = this.right.right.min()
                    this.right.value = min.value
                    min.parent.remove(min.value)
                }
            } else {
                this.right.remove(value)
            }
        }
    }

    isValueEqual(value: T): boolean {
        return this.value === value
    }

    size(): number {
        const leftSize = !isNull(this.left) ? this.left.size() : 0
        const rightSize = !isNull(this.right) ? this.right.size() : 0
        return leftSize + 1 + rightSize
    }

    depth(): number {
        const leftDepth = !isNull(this.left) ? this.left.depth() : 0
        const rightDepth = !isNull(this.right) ? this.right.depth() : 0
        return Math.max(leftDepth, rightDepth) + 1
    }

    min(): BinaryTreeNode<T> {
        return isNull(this.left) ? this : this.left.min()
    }

    max(): BinaryTreeNode<T> {
        return isNull(this.right) ? this : this.right.max()
    }

    toArray(currentArray: T[]): T[] {
        if (!isNull(this.left)) {
            this.left.toArray(currentArray)
        }
        currentArray.push(this.value)
        if (!isNull(this.right)) {
            this.right.toArray(currentArray)
        }
        return currentArray
    }
}
