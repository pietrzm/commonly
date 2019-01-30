import BinaryTree from "./BinaryTree"

describe("class Binarytree<T>", () => {
    context("BinaryTree with no elements", () => {

        it("should be empty", () => {
            const tree = new BinaryTree<number>()
            expect(tree.isEmpty()).toBeTruthy()
        })
        it("root should be null", () => {
            const tree = new BinaryTree<number>()
            expect(tree.root).toBeNull()
        })
        it("depth should be 0", () => {
            const tree = new BinaryTree<number>()
            expect(tree.depth()).toEqual(0)
        })
        it("should have 0 element", () => {
            const tree = new BinaryTree<number>()
            expect(tree.size()).toEqual(0)
        })
        it("min() should return null", () => {
            const tree = new BinaryTree<number>()
            expect(tree.min()).toBeNull()
        })
        it("max() should return null", () => {
            const tree = new BinaryTree<number>()
            expect(tree.max()).toBeNull()
        })
        it("should return empty array", () => {
            const tree = new BinaryTree<number>()
            const array = tree.toArray()
            expect(array.length).toEqual(0)
        })
        it("should have zero iteration steps", () => {
            const tree = new BinaryTree<number>()
            let i = 0
            for(const x of tree) {
                i++
            }
            expect(i).toEqual(0)
        })
    })

    context("BinaryTree with single element", () => {
        const given = () => {
            const tree = new BinaryTree<number>()
            tree.add(15)
            return tree
        }

        it("should not be empty", () => {
            const tree = given()
            expect(tree.isEmpty()).toBeFalsy()
        })
        it("added element should be root", () => {
            const tree = given()
            expect(tree.root.value).toEqual(15)
        })
        it("depth should be 1", () => {
            const tree = given()
            expect(tree.depth()).toEqual(1)
        })
        it("should have 1 element", () => {
            const tree = given()
            expect(tree.size()).toEqual(1)
        })
        it("root should not have any children", () => {
            const tree = given()
            expect(tree.root.left).toBeNull()
            expect(tree.root.right).toBeNull()
        })
        it("min() should return given element", () => {
            const tree = given()
            expect(tree.min()).toEqual(15)
        })
        it("max() should return given element", () => {
            const tree = given()
            expect(tree.max()).toEqual(15)
        })
        it("should return array with given element", () => {
            const tree = given()
            const array = tree.toArray()
            expect(array.length).toEqual(1)
            expect(array[0]).toEqual(15)
        })
        it("should have one iteration steps", () => {
            const tree = given()
            let i = 0
            for(const x of tree) {
                expect(x).toEqual(15)
                i++
            }
            expect(i).toEqual(1)
        })
    })

    context("BinaryTree with multiple elements", () => {
        const given = () => {
            const tree = new BinaryTree<number>()
            tree.add(7)
            tree.add(4)
            tree.add(10)
            tree.add(6)
            return tree
        }

        it("depth should be 3", () => {
            const tree = given()
            expect(tree.depth()).toEqual(3)
        })
        it("should have 4 elements", () => {
            const tree = given()
            expect(tree.size()).toEqual(4)
        })
        it("min() should return minimum", () => {
            const tree = given()
            expect(tree.min()).toEqual(4)
        })
        it("max() should return maximum", () => {
            const tree = given()
            expect(tree.max()).toEqual(10)
        })
        it("should be sorted", () => {
            const tree = given()
            const array = tree.toArray()
            expect(array.length).toEqual(4)
            expect(array).toEqual([4, 6, 7, 10])
        })
        it("should have correct structure", () => {
            const tree = given()
            expect(tree.root.value).toEqual(7)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(10)
            expect(tree.root.left.right.value).toEqual(6)
        })
        it("should iterate in correct order", () => {
            const tree = given()
            const numSorted = [4, 6, 7, 10]
            let i = 0
            for(const x of tree) {
                expect(x).toEqual(numSorted[i])
                i++
            }
            expect(i).toEqual(4)
        })
    })

    context("BinaryTree with custom comparator", () => {
        const given = () => {
            const tree = new BinaryTree<number>((a: number, b: number) => a % 5 > b % 5)
            tree.add(7)
            tree.add(4)
            tree.add(10)
            tree.add(6)
            return tree
        }

        it("should be sorted", () => {
            const tree = given()
            const array = tree.toArray()
            expect(array.length).toEqual(4)
            expect(array).toEqual([10, 6, 7, 4])
        })
        it("should have correct structure", () => {
            const tree = given()
            expect(tree.root.value).toEqual(7)
            expect(tree.root.left.value).toEqual(10)
            expect(tree.root.right.value).toEqual(4)
            expect(tree.root.left.right.value).toEqual(6)
        })
    })

    context("BinaryTree with complex structure", () => {
        const given = () => {
            const tree = new BinaryTree<number>()
            tree.add(8)
            tree.add(4)
            tree.add(10)
            tree.add(7)
            tree.add(14)
            tree.add(6)
            tree.add(3)
            return tree
        }

        it("should remove element with no children correcly", () => {
            const tree = given()
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
        it("should remove element with one child correcly", () => {
            const tree = given()
            tree.remove(7)
            expect(tree.toArray()).toEqual([3, 4, 6, 8, 10, 14])
            expect(tree.root.value).toEqual(8)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(10)
            expect(tree.root.left.left.value).toEqual(3)
            expect(tree.root.left.right.value).toEqual(6)
            expect(tree.root.right.right.value).toEqual(14)
        })
        it("should remove element with two children correcly", () => {
            const tree = given()
            tree.remove(8)
            expect(tree.toArray()).toEqual([3, 4, 6, 7, 10, 14])
            expect(tree.root.value).toEqual(10)
            expect(tree.root.left.value).toEqual(4)
            expect(tree.root.right.value).toEqual(14)
            expect(tree.root.left.left.value).toEqual(3)
            expect(tree.root.left.right.value).toEqual(7)
            expect(tree.root.left.right.left.value).toEqual(6)
        })
    })
})
