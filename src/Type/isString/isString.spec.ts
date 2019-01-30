import isString from "./isString"



describe(`function isSymbol(x)`, () => {
    context(`x is an Symbol`, () => {
        it(`should return true`, () => {
            const subject = ""

            expect(isString(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isString(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isString(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isString(NaN))
                .toBe(false)
            expect(isString(true))
                .toBe(false)

            expect(isString({}))
                .toBe(false)
            expect(isString([]))
                .toBe(false)
            expect(isString(new Set()))
                .toBe(false)
            expect(isString(new Map()))
                .toBe(false)
        })
    })
})
