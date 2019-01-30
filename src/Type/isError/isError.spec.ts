import isError from "./isError"



describe(`function isError(x)`, () => {
    context(`x is an Error`, () => {
        it(`should return true`, () => {
            const subject = new Error()

            expect(isError(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isError(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isError(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isError(NaN))
                .toBe(false)
            expect(isError(true))
                .toBe(false)
            expect(isError(""))
                .toBe(false)

            expect(isError({}))
                .toBe(false)
            expect(isError([]))
                .toBe(false)
            expect(isError(new Set()))
                .toBe(false)
            expect(isError(new Map()))
                .toBe(false)
        })
    })
})
