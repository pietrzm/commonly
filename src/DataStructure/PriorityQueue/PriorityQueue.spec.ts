import PriorityQueue from "./PriorityQueue"

describe('interface PriorityQueue<T>', () => {
    context('empty queue', () => {
        it('.enqueue()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.enqueue(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it('.dequeue()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.dequeue()).toBeNull()
        })
        it('.peek()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.peek()).toBeNull()
        })
        it('.isEmpty()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.isEmpty()).toBeTruthy()
        })
        it('.size()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            expect(q.size()).toEqual(0)
        })
        it('[Symbol.iterator]()', () => {
            const q = PriorityQueue.from(...[] as number[])()
            let i = 0
            for(let x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
    })
    context('queue with one element', () => {
        it('.enqueue()', () => {
            const q = PriorityQueue.from(10)()
            expect(q.enqueue(15)).toEqual(2)
            expect(q.peek()).toEqual(15)
        })
        it('.dequeue()', () => {
            const q = PriorityQueue.from(10)()
            expect(q.dequeue()).toEqual(10)
        })
        it('.peek()', () => {
            const q = PriorityQueue.from(10)()
            expect(q.peek()).toEqual(10)
        })
        it('.isEmpty()', () => {
            const q = PriorityQueue.from(10)()
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = PriorityQueue.from(10)()
            expect(q.size()).toEqual(1)
        })
        it('[Symbol.iterator]()', () => {
            const q = PriorityQueue.from(10)()
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
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.enqueue(5)).toEqual(4)
            expect(q.peek()).toEqual(5)
        })
        it('.dequeue()', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.dequeue()).toEqual(3)
        })
        it('.peek()', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.peek()).toEqual(3)
        })
        it('.isEmpty()', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.size()).toEqual(3)
        })
        it('[Symbol.iterator]()', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            let i = 0
            let sum = 0
            for(let x of q) {
                sum += x
                i++
            }
            expect(i).toEqual(3)
            expect(sum).toEqual(6)
        })
        it('should have priority ordering', () => {
            const q = PriorityQueue.from(1, 3, 2)()
            expect(q.dequeue()).toEqual(3)
            expect(q.dequeue()).toEqual(2)
            expect(q.dequeue()).toEqual(1)
        })
        it('should support custom priority ordering', () => {
            const q = PriorityQueue.from(22, 30, 11)((a, b) => a % 5 > b % 5)
            expect(q.dequeue()).toEqual(22)
            expect(q.dequeue()).toEqual(11)
            expect(q.dequeue()).toEqual(30)
        })
    })
})