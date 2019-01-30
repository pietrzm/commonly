import isNull from "./isNull"



describe(`function isNull(x)`, () => {
    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isNull(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return true`, () => {
            expect(isNull(null))
                .toBe(true)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isNull(NaN))
                .toBe(false)
            expect(isNull(true))
                .toBe(false)
            expect(isNull(""))
                .toBe(false)

            expect(isNull({}))
                .toBe(false)
            expect(isNull([]))
                .toBe(false)
            expect(isNull(new Set()))
                .toBe(false)
            expect(isNull(new Map()))
                .toBe(false)
        })
    })
})
