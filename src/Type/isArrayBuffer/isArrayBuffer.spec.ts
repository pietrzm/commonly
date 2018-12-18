import isArrayBuffer from "./isArrayBuffer"



describe(`function isArrayBuffer(x)`, () => {
    context(`x is an ArrayBuffer`, () => {
        it(`should return true`, () => {
            const subject = new ArrayBuffer(0)

            expect(isArrayBuffer(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isArrayBuffer(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isArrayBuffer(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isArrayBuffer(NaN))
                .toBe(false)
            expect(isArrayBuffer(true))
                .toBe(false)
            expect(isArrayBuffer(""))
                .toBe(false)

            expect(isArrayBuffer({}))
                .toBe(false)
            expect(isArrayBuffer([]))
                .toBe(false)
            expect(isArrayBuffer(new Set()))
                .toBe(false)
            expect(isArrayBuffer(new Map()))
                .toBe(false)
        })
    })
})