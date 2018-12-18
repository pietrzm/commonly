import isPrimitive from "./isPrimitive"



describe(`function isPrimitive(x)`, () => {
    context(`x is a primitive`, () => {
        it(`should return true`, () => {
            expect(isPrimitive(NaN))
                .toBe(true)
            expect(isPrimitive(true))
                .toBe(true)
            expect(isPrimitive(""))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return true`, () => {
            expect(isPrimitive(undefined))
                .toBe(true)
        })
    })

    context(`x is null`, () => {
        it(`should return true`, () => {
            expect(isPrimitive(null))
                .toBe(true)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isPrimitive({}))
                .toBe(false)
            expect(isPrimitive([]))
                .toBe(false)
            expect(isPrimitive(new Set()))
                .toBe(false)
            expect(isPrimitive(new Map()))
                .toBe(false)
        })
    })
})