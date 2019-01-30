import map from "Iterable/map/map"
import add from "Math/add/add"
import PriorityQueue from "./PriorityQueue"

describe("interface PriorityQueue<T>", () => {
    context("empty queue", () => {
        it("should add new element at the end", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.enqueue(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it("should remove the first element", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.dequeue()).toBeNull()
        })
        it("should return the first element without removing it", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.peek()).toBeNull()
        })
        it("should be empty", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.isEmpty()).toBeTruthy()
        })
        it("should have size of 0", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.size()).toEqual(0)
        })
        it("should return empty array", () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.toArray()).toEqual([])
        })
        it("should be iterable with zero iteration steps", () => {
            const q = PriorityQueue.from(...[] as number[])()
            let i = 0
            for(const x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
        it("should be reducible", () => {
            const q = PriorityQueue.from(...[] as number[])()
            const q2: PriorityQueue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([])
        })
    })
    context("queue with one element", () => {
        it("should add new element at the end", () => {
            const q = PriorityQueue.from(10)()
            expect(q.enqueue(15)).toEqual(2)
            expect(q.peek()).toEqual(15)
        })
        it("should remove the first element", () => {
            const q = PriorityQueue.from(10)()
            expect(q.dequeue()).toEqual(10)
        })
        it("should return the first element without removing it", () => {
            const q = PriorityQueue.from(10)()
            expect(q.peek()).toEqual(10)
        })
        it("should not be empty", () => {
            const q = PriorityQueue.from(10)()
            expect(q.isEmpty()).toBeFalsy()
        })
        it("should have size of 1", () => {
            const q = PriorityQueue.from(10)()
            expect(q.size()).toEqual(1)
        })
        it("should return array with given element", () => {
            const q = PriorityQueue.from(10)()
            expect(q.toArray()).toEqual([10])
        })
        it("should be iterable with one iteration step", () => {
            const q = PriorityQueue.from(10)()
            let i = 0
            for(const x of q) {
                expect(x).toEqual(10)
                i++
            }
            expect(i).toEqual(1)
        })
        it("should be reducible", () => {
            const q = PriorityQueue.from(10)()
            const q2: PriorityQueue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([11])
        })
    })
    context("queue with multiple elements", () => {
        it("should add new element at the end", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.enqueue(5)).toEqual(4)
            expect(q.peek()).toEqual(5)
        })
        it("should remove the first element", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.dequeue()).toEqual(3)
        })
        it("should return the first element without removing it", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.peek()).toEqual(3)
        })
        it("should not be empty", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.isEmpty()).toBeFalsy()
        })
        it("should have size equal to the number of elements", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.size()).toEqual(3)
        })
        it("should return array with all of its elements", () => {
            const q = PriorityQueue.from(1, 2, 3)()
            expect(q.toArray()).toEqual([1, 2, 3])
        })
        it("should iterate over all elements", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            let i = 0
            let sum = 0
            for(const x of q) {
                sum += x
                i++
            }
            expect(i).toEqual(3)
            expect(sum).toEqual(6)
        })
        it("should be reducible", () => {
            const q = PriorityQueue.from(1, 2, 3)()
            const q2: PriorityQueue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([2, 3, 4])
        })
        it("should have priority ordering", () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.dequeue()).toEqual(3)
            expect(q.dequeue()).toEqual(2)
            expect(q.dequeue()).toEqual(1)
        })
        it("should support custom priority ordering", () => {
            const q = PriorityQueue.from(22, 30, 11)((a, b) => a % 5 > b % 5)
            expect(q.dequeue()).toEqual(22)
            expect(q.dequeue()).toEqual(11)
            expect(q.dequeue()).toEqual(30)
        })
    })
})
