import Queue from "./Queue"

describe('abstract class Queue<T>', () => {
    context('empty queue', () => {
        it('.enqueue()', () => {
            const q = Queue.from(...[] as number[])
            expect(q.enqueue(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it('.dequeue()', () => {
            const q = Queue.from(...[] as number[])
            expect(q.dequeue()).toBeUndefined()
        })
        it('.peek()', () => {
            const q = Queue.from(...[] as number[])
            expect(q.peek()).toBeUndefined()
        })
        it('.isEmpty()', () => {
            const q = Queue.from(...[] as number[])
            expect(q.isEmpty()).toBeTruthy()
        })
        it('.size()', () => {
            const q = Queue.from(...[] as number[])
            expect(q.size()).toEqual(0)
        })
        it('[Symbol.iterator]()', () => {
            const q = Queue.from(...[] as number[])
            let i = 0
            for(let x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
    })
    context('queue with one element', () => {
        it('.enqueue()', () => {
            const q = Queue.from(10)
            expect(q.enqueue(5)).toEqual(2)
            expect(q.peek()).toEqual(10)
        })
        it('.dequeue()', () => {
            const q = Queue.from(10)
            expect(q.dequeue()).toEqual(10)
        })
        it('.peek()', () => {
            const q = Queue.from(10)
            expect(q.peek()).toEqual(10)
        })
        it('.isEmpty()', () => {
            const q = Queue.from(10)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = Queue.from(10)
            expect(q.size()).toEqual(1)
        })
        it('[Symbol.iterator]()', () => {
            const q = Queue.from(10)
            let i = 0
            for(let x of q) {
                expect(x).toEqual(10)
                i++
            }
            expect(i).toEqual(1)
        })
    })
    context('queue with multiple elements', () => {
        it('.enqueue()', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.enqueue(5)).toEqual(4)
            expect(q.peek()).toEqual(1)
        })
        it('.dequeue()', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.dequeue()).toEqual(1)
        })
        it('.peek()', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.peek()).toEqual(1)
        })
        it('.isEmpty()', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.size()).toEqual(3)
        })
        it('[Symbol.iterator]()', () => {
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
        it('should have LIFO ordering', () => {
            const q = Queue.from(1, 2, 3)
            expect(q.dequeue()).toEqual(1)
            expect(q.dequeue()).toEqual(2)
            expect(q.dequeue()).toEqual(3)
        })
    })
})