import Stack from "./Stack"

describe('interface Stack<T>', () => {
    context('empty stack', () => {
        it('should add new elements at the top of the stack', () => {
            const q = Stack.from(...[] as number[])
            expect(q.push(2)).toEqual(1)
            expect(q.peek()).toEqual(2)
        })
        it('should remove element from the top of the stack', () => {
            const q = Stack.from(...[] as number[])
            expect(q.pop()).toBeUndefined()
        })
        it('should return the top element without removing it', () => {
            const q = Stack.from(...[] as number[])
            expect(q.peek()).toBeUndefined()
        })
        it('should be empty', () => {
            const q = Stack.from(...[] as number[])
            expect(q.isEmpty()).toBeTruthy()
        })
        it('should have zero elements', () => {
            const q = Stack.from(...[] as number[])
            expect(q.size()).toEqual(0)
        })
        it('should be iterable with zero iteration steps', () => {
            const q = Stack.from(...[] as number[])
            let i = 0
            for(let x of q) {
                i++
            }
            expect(i).toEqual(0)
        })
    })
    context('stack with one element', () => {
        it('should add new elements at the top of the stack', () => {
            const q = Stack.from(10)
            expect(q.push(5)).toEqual(2)
            expect(q.peek()).toEqual(5)
        })
        it('should remove element from the top of the stack', () => {
            const q = Stack.from(10)
            expect(q.pop()).toEqual(10)
        })
        it('should return the top element without removing it', () => {
            const q = Stack.from(10)
            expect(q.peek()).toEqual(10)
        })
        it('should not be empty', () => {
            const q = Stack.from(10)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('should have size of 1', () => {
            const q = Stack.from(10)
            expect(q.size()).toEqual(1)
        })
        it('should be iterable with one iteration step', () => {
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
        it('should add new elements at the top of the stack', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.push(5)).toEqual(4)
            expect(q.peek()).toEqual(5)
        })
        it('should remove element from the top of the stack', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.pop()).toEqual(3)
        })
        it('should return the top element without removing it', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.peek()).toEqual(3)
        })
        it('should not be empty', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.isEmpty()).toBeFalsy()
        })
        it('should have size equal to the number of elements', () => {
            const q = Stack.from(1, 2, 3)
            expect(q.size()).toEqual(3)
        })
        it('should iterate over all of its elements', () => {
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