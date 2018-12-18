import isNumber from "./isNumber"



describe(`function isNumber(x)`, () => {
    context(`x is a number`, () => {
        it(`should return true`, () => {
            const subjectA = 0,
                subjectB = Infinity,
                subjectC = NaN

            expect(isNumber(subjectA))
                .toBe(true)
            expect(isNumber(subjectB))
                .toBe(true)
            expect(isNumber(subjectC))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isNumber(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isNumber(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isNumber(true))
                .toBe(false)
            expect(isNumber(""))
                .toBe(false)

            expect(isNumber({}))
                .toBe(false)
            expect(isNumber([]))
                .toBe(false)
            expect(isNumber(new Set()))
                .toBe(false)
            expect(isNumber(new Map()))
                .toBe(false)
        })
    })
})