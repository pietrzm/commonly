import isSymbol from "./isSymbol"



describe(`function isSymbol(x)`, () => {
    context(`x is a Symbol`, () => {
        it(`should return true`, () => {
            const subject = Symbol()

            expect(isSymbol(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isSymbol(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isSymbol(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isSymbol(NaN))
                .toBe(false)
            expect(isSymbol(true))
                .toBe(false)
            expect(isSymbol(""))
                .toBe(false)

            expect(isSymbol({}))
                .toBe(false)
            expect(isSymbol([]))
                .toBe(false)
            expect(isSymbol(new Set()))
                .toBe(false)
            expect(isSymbol(new Map()))
                .toBe(false)
        })
    })
})
