import isUndefined from "./isUndefined"



describe(`function isUndefined(x)`, () => {
    context(`x is undefined`, () => {
        it(`should return true`, () => {
            expect(isUndefined(undefined))
                .toBe(true)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isUndefined(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isUndefined(NaN))
                .toBe(false)
            expect(isUndefined(true))
                .toBe(false)
            expect(isUndefined(""))
                .toBe(false)

            expect(isUndefined({}))
                .toBe(false)
            expect(isUndefined([]))
                .toBe(false)
            expect(isUndefined(new Set()))
                .toBe(false)
            expect(isUndefined(new Map()))
                .toBe(false)
        })
    })
})