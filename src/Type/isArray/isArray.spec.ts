import isArray from "./isArray"



describe(`function isArray(x)`, () => {
    context(`x is an Array`, () => {
        it(`should return true`, () => {
            const subjectA = [],
                subjectB = new Array(0)

            expect(isArray(subjectA))
                .toBe(true)
            expect(isArray(subjectB))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isArray(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isArray(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isArray(NaN))
                .toBe(false)
            expect(isArray(true))
                .toBe(false)
            expect(isArray(""))
                .toBe(false)

            expect(isArray({}))
                .toBe(false)
            expect(isArray(new Set()))
                .toBe(false)
            expect(isArray(new Map()))
                .toBe(false)
        })
    })
})
