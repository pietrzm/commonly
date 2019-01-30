import isBoolean from "./isBoolean"



describe(`function isArray(x)`, () => {
    context(`x is a boolean`, () => {
        it(`should return true`, () => {
            expect(isBoolean(true))
                .toBe(true)
            expect(isBoolean(false))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isBoolean(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isBoolean(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isBoolean(NaN))
                .toBe(false)
            expect(isBoolean(""))
                .toBe(false)

            expect(isBoolean({}))
                .toBe(false)
            expect(isBoolean([]))
                .toBe(false)
            expect(isBoolean(new Set()))
                .toBe(false)
            expect(isBoolean(new Map()))
                .toBe(false)
        })
    })
})
