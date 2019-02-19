import identity from "Function/identity/identity"
import isPromise from "./isPromise"



describe(`function isPromise(x)`, () => {
    context(`x is a Promise`, () => {
        it(`should return true`, () => {
            const subjectA = new Promise(identity),
                subjectB = Promise.resolve()

            expect(isPromise(subjectA))
                .toBe(true)
            expect(isPromise(subjectB))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isPromise(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isPromise(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isPromise(NaN))
                .toBe(false)
            expect(isPromise(true))
                .toBe(false)
            expect(isPromise(""))
                .toBe(false)

            expect(isPromise({}))
                .toBe(false)
            expect(isPromise([]))
                .toBe(false)
            expect(isPromise(new Set()))
                .toBe(false)
            expect(isPromise(new Map()))
                .toBe(false)
        })
    })
})
