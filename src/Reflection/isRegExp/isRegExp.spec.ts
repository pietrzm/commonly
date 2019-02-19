import isRegExp from "./isRegExp"



describe(`function isRegExp(x)`, () => {
    context(`x is a RegExp`, () => {
        it(`should return true`, () => {
            const subjectA = new RegExp("ab+c"),
                subjectB = /ab+c/

            expect(isRegExp(subjectA))
                .toBe(true)
            expect(isRegExp(subjectB))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isRegExp(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isRegExp(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isRegExp(NaN))
                .toBe(false)
            expect(isRegExp(true))
                .toBe(false)
            expect(isRegExp(""))
                .toBe(false)

            expect(isRegExp({}))
                .toBe(false)
            expect(isRegExp([]))
                .toBe(false)
            expect(isRegExp(new Set()))
                .toBe(false)
            expect(isRegExp(new Map()))
                .toBe(false)
        })
    })
})
