import Stack from "./Stack"

describe('interface Stack<T>', () => {
    context('empty stack', () => {
        it('.push()', () => {
            const q = Stack.from(...[] as number[])
            expect(q.push(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it('.pop()', () => {
            const q = Stack.from(...[] as number[])
            expect(q.pop()).toBeUndefined()
        })
        it('.peek()', () => {
            const q = Stack.from(...[] as number[])
            expect(q.peek()).toBeUndefined()
        })
        it('.isEmpty()', () => {
            const q = Stack.from(...[] as number[])
            expect(q.isEmpty()).toBeTruthy()
        })
        it('.size()', () => {
            const q = Stack.from(...[] as number[])
            expect(q.size()).toEqual(0)
        })
        it('[Symbol.iterator]()', () => {
            const q = Stack.from(...[] as number[])
            let i = 0
            for(let x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
    })
    context('stack with one element', () => {
        it('.push()', () => {
            const q = Stack.from(10)
            expect(q.push(5)).toEqual(2)
            expect(q.peek()).toEqual(5)
        })
        it('.pop()', () => {
            const q = Stack.from(10)
            expect(q.pop()).toEqual(10)
        })
        it('.peek()', () => {
            const q = Stack.from(10)
            expect(q.peek()).toEqual(10)
        })
        it('.isEmpty()', () => {
            const q = Stack.from(10)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = Stack.from(10)
            expect(q.size()).toEqual(1)
        })
        it('[Symbol.iterator]()', () => {
            const q = Stack.from(10)
            let i = 0
            for(let x of q) {
                expect(x).toEqual(10)
                i++
            }
            expect(i).toEqual(1)
        })
    })
    context('stack with multiple elements', () => {
        it('.push()', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.push(5)).toEqual(4)
            expect(q.peek()).toEqual(5)
        })
        it('.pop()', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.pop()).toEqual(3)
        })
        it('.peek()', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.peek()).toEqual(3)
        })
        it('.isEmpty()', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('.size()', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.size()).toEqual(3)
        })
        it('[Symbol.iterator]()', () => {
            const q = Stack.from(1, 2, 3)
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
            const q = Stack.from(1, 2, 3)
            expect(q.pop()).toEqual(3)
            expect(q.pop()).toEqual(2)
            expect(q.pop()).toEqual(1)
        })
    })
})