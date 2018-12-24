import BinaryTree from "./BinaryTree"

describe('class Binarytree<T>', () => {
    context('BinaryTree with no elements', () => {
        const tree = new BinaryTree<Date>()

        it('should be empty', () => {
            expect(tree.isEmpty()).toBeTruthy()
        })
        it('root should be null', () => {
            expect(tree.root).toBeNull()
        })
        it('depth should be 0', () => {
            expect(tree.depth()).toEqual(0)
        })
        it('should have 0 element', () => {
            expect(tree.size()).toEqual(0)
        })
        it('min() should return null', () => {
            expect(tree.min()).toBeNull()
        })
        it('max() should return null', () => {
            expect(tree.max()).toBeNull()
        })
        it('should return empty array', () => {
            const array = tree.toArray()
            expect(array.length).toEqual(0)
        })
        it('should have zero iteration steps', () => {
            let i = 0
            for(let x of tree) {
                i++
            }
            expect(i).toEqual(0)
        })
    })

    context('BinaryTree with single element', () => {
        const tree = new BinaryTree<Date>()
        const date = new Date()
        tree.add(date)

        it('should not be empty', () => {
            expect(tree.isEmpty()).toBeFalsy()
        })
        it('added element should be root', () => {
            expect(tree.root.value).toBe(date)
        })
        it('depth should be 1', () => {
            expect(tree.depth()).toEqual(1)
        })
        it('should have 1 element', () => {
            expect(tree.size()).toEqual(1)
        })
        it('root should not have any children', () => {
            expect(tree.root.left).toBeNull()
            expect(tree.root.right).toBeNull()
        })
        it('min() should return given element', () => {
            expect(tree.min()).toBe(date)
        })
        it('max() should return given element', () => {
            expect(tree.max()).toBe(date)
        })
        it('should return array with given element', () => {
            const array = tree.toArray()
            expect(array.length).toEqual(1)
            expect(array[0]).toBe(date)
        })
        it('should have one iteration steps', () => {
            let i = 0
            for(let x of tree) {
                expect(x).toBe(date)
                i++
            }
            expect(i).toEqual(1)
        })
    })

    context('BinaryTree with multiple elements', () => {
        const tree = new BinaryTree<Number>()
        const num1 = new Number(7)
        const num2 = new Number(4)
        const num3 = new Number(10)
        const num4 = new Number(6)
        tree.add(num1)
        tree.add(num2)
        tree.add(num3)
        tree.add(num4)

        it('depth should be 3', () => {
            expect(tree.depth()).toEqual(3)
        })
        it('should have 4 elements', () => {
            expect(tree.size()).toEqual(4)
        })
        it('min() should return minimum', () => {
            expect(tree.min()).toBe(num2)
        })
        it('max() should return maximum', () => {
            expect(tree.max()).toBe(num3)
        })
        it('should be sorted', () => {
            const array = tree.toArray()
            expect(array.length).toEqual(4)
            expect(array).toEqual([4, 6, 7, 10])
        })
        it('should have correct structure', () => {
            expect(tree.root.value).toBe(num1)
            expect(tree.root.left.value).toBe(num2)
            expect(tree.root.right.value).toBe(num3)
            expect(tree.root.left.right.value).toBe(num4)
        })
        it('should iterate in correct order', () => {
            const numSorted = [4, 6, 7, 10]
            let i = 0
            for(let x of tree) {
                expect(x).toEqual(numSorted[i])
                i++
            }
            expect(i).toEqual(4)
        })
    })

    context('BinaryTree with custom comparator', () => {
        const tree = new BinaryTree<Number>((a: number, b: number) => a % 5 > b % 5)
        const num1 = new Number(7)
        const num2 = new Number(4)
        const num3 = new Number(10)
        const num4 = new Number(6)
        tree.add(num1)
        tree.add(num2)
        tree.add(num3)
        tree.add(num4)

        it('should be sorted', () => {
            const array = tree.toArray()
            expect(array.length).toEqual(4)
            expect(array).toEqual([10, 6, 7, 4])
        })
        it('should have correct structure', () => {
            expect(tree.root.value).toBe(num1)
            expect(tree.root.left.value).toBe(num3)
            expect(tree.root.right.value).toBe(num2)
            expect(tree.root.left.right.value).toBe(num4)
        })
    })

    context('BinaryTree with complex structure', () => {
        const tree = new BinaryTree<Number>()
        tree.add(8)
        tree.add(4)
        tree.add(10)
        tree.add(7)
        tree.add(14)
        tree.add(6)
        tree.add(3)

        it('should remove element with no children correcly', () => {
            tree.remove(3)
            expect(tree.toArray()).toEqual([4, 6, 7, 8, 10, 14])
            expect(tree.root.value).toEqual(8)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(10)
            expect(tree.root.left.left).toBeNull()
            expect(tree.root.left.right.value).toEqual(7)
            expect(tree.root.left.right.left.value).toEqual(6)
            expect(tree.root.right.right.value).toEqual(14)
        })
        it('should remove element with one child correcly', () => {
            tree.remove(7)
            expect(tree.toArray()).toEqual([4, 6, 8, 10, 14])
            expect(tree.root.value).toEqual(8)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(10)
            expect(tree.root.left.right.value).toEqual(6)
            expect(tree.root.right.right.value).toEqual(14)
        })
        it('should remove element with two children correcly', () => {
            tree.remove(8)
            expect(tree.toArray()).toEqual([4, 6, 10, 14])
            expect(tree.root.value).toEqual(10)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(14)
            expect(tree.root.left.right.value).toEqual(6)
        })
    })
})