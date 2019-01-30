import identity from "Function/identity/identity"
import isFunction from "./isFunction"



describe(`function isFunction(x)`, () => {
    context(`x is a function`, () => {
        it(`should return true`, () => {
            const subject = identity

            expect(isFunction(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isFunction(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isFunction(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isFunction(NaN))
                .toBe(false)
            expect(isFunction(true))
                .toBe(false)
            expect(isFunction(""))
                .toBe(false)

            expect(isFunction({}))
                .toBe(false)
            expect(isFunction([]))
                .toBe(false)
            expect(isFunction(new Set()))
                .toBe(false)
            expect(isFunction(new Map()))
                .toBe(false)
        })
    })
})
