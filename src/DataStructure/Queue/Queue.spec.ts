import Queue from "./Queue"
import map from "Iterable/map/map"
import add from "Math/add/add"

describe('interface Queue<T>', () => {
    context('empty queue', () => {
        it('should add new element at the end', () => {
            const q = Queue.from(...[] as number[])
            expect(q.enqueue(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it('should remove the first element', () => {
            const q = Queue.from(...[] as number[])
            expect(q.dequeue()).toBeUndefined()
        })
        it('should return the first element without removing it', () => {
            const q = Queue.from(...[] as number[])
            expect(q.peek()).toBeUndefined()
        })
        it('should be empty', () => {
            const q = Queue.from(...[] as number[])
            expect(q.isEmpty()).toBeTruthy()
        })
        it('should have size of 0', () => {
            const q = Queue.from(...[] as number[])
            expect(q.size()).toEqual(0)
        })
        it('should return empty array', () => {
            const q = Queue.from(...[] as number[])
            expect(q.toArray()).toEqual([])
        })
        it('should be iterable with zero iteration steps', () => {
            const q = Queue.from(...[] as number[])
            let i = 0
            for(let x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
        it('should be reducible', () => {
            const q = Queue.from(...[] as number[])
            const q2: Queue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([])
        })
    })
    context('queue with one element', () => {
        it('should add new element at the end', () => {
            const q = Queue.from(10)
            expect(q.enqueue(5)).toEqual(2)
            expect(q.peek()).toEqual(10)
        })
        it('should remove the first element', () => {
            const q = Queue.from(10)
            expect(q.dequeue()).toEqual(10)
        })
        it('should return the first element without removing it', () => {
            const q = Queue.from(10)
            expect(q.peek()).toEqual(10)
        })
        it('should not be empty', () => {
            const q = Queue.from(10)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('should have size of 1', () => {
            const q = Queue.from(10)
            expect(q.size()).toEqual(1)
        })
        it('should return array with given element', () => {
            const q = Queue.from(10)
            expect(q.toArray()).toEqual([10])
        })
        it('should be iterable with one iteration step', () => {
            const q = Queue.from(10)
            let i = 0
            for(let x of q) {
                expect(x).toEqual(10)
                i++
            }
            expect(i).toEqual(1)
        })
        it('should be reducible', () => {
            const q = Queue.from(10)
            const q2: Queue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([11])
        })
    })
    context('queue with multiple elements', () => {
        it('should add new element at the end', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.enqueue(5)).toEqual(4)
            expect(q.peek()).toEqual(1)
        })
        it('should remove the first element', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.dequeue()).toEqual(1)
        })
        it('should return the first element without removing it', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.peek()).toEqual(1)
        })
        it('should not be empty', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('should have size equal to the number of elements', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.size()).toEqual(3)
        })
        it('should return array with all of its elements', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.toArray()).toEqual([1, 2, 3])
        })
        it('should iterate over all elements', () => {
            const q = Queue.from(1, 2, 3)
            let i = 0
            let sum = 0
            for(let x of q) {
                sum += x
                i++
            }
            expect(i).toEqual(3)
            expect(sum).toEqual(6)
        })
        it('should be reducible', () => {
            const q = Queue.from(1, 2, 3)
            const q2: Queue<number> = map(add(1), q)
            expect(q2.toArray()).toEqual([2, 3, 4])
        })
        it('should have FIFO ordering', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.dequeue()).toEqual(1)
            expect(q.dequeue()).toEqual(2)
            expect(q.dequeue()).toEqual(3)
        })
    })
})