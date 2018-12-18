import isTypedArray from "./isTypedArray"



describe(`function isTypedArray(x)`, () => {
    context(`x is a TypedArray`, () => {
        it(`should return true`, () => {
            expect(isTypedArray(new Int8Array(0)))
                .toBe(true)
            expect(isTypedArray(new Uint8Array(0)))
                .toBe(true)
            expect(isTypedArray(new Uint8ClampedArray(0)))
                .toBe(true)
            expect(isTypedArray(new Int16Array(0)))
                .toBe(true)
            expect(isTypedArray(new Uint16Array(0)))
                .toBe(true)
            expect(isTypedArray(new Int32Array(0)))
                .toBe(true)
            expect(isTypedArray(new Uint32Array(0)))
                .toBe(true)
            expect(isTypedArray(new Float32Array(0)))
                .toBe(true)
            expect(isTypedArray(new Float64Array(0)))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isTypedArray(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isTypedArray(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isTypedArray(NaN))
                .toBe(false)
            expect(isTypedArray(true))
                .toBe(false)
            expect(isTypedArray(""))
                .toBe(false)

            expect(isTypedArray({}))
                .toBe(false)
            expect(isTypedArray([]))
                .toBe(false)
            expect(isTypedArray(new Set()))
                .toBe(false)
            expect(isTypedArray(new Map()))
                .toBe(false)
        })
    })
})