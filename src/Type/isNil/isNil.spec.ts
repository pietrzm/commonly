import isNil from "./isNil"



describe(`function isNil(x)`, () => {
    context(`x is undefined`, () => {
        it(`should return true`, () => {
            expect(isNil(undefined))
                .toBe(true)
        })
    })

    context(`x is null`, () => {
        it(`should return true`, () => {
            expect(isNil(null))
                .toBe(true)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isNil(NaN))
                .toBe(false)
            expect(isNil(true))
                .toBe(false)
            expect(isNil(""))
                .toBe(false)

            expect(isNil({}))
                .toBe(false)
            expect(isNil([]))
                .toBe(false)
            expect(isNil(new Set()))
                .toBe(false)
            expect(isNil(new Map()))
                .toBe(false)
        })
    })
})