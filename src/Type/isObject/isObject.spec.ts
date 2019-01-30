import isObject from "./isObject"



describe(`function isObject(x)`, () => {
    context(`x is an Object`, () => {
        it(`should return true`, () => {
            expect(isObject({}))
                .toBe(true)
            expect(isObject(Object.create(null)))
                .toBe(true)
            expect(isObject(new Object(null)))
                .toBe(true)

            expect(isObject([]))
                .toBe(true)
            expect(isObject(new Set()))
                .toBe(true)
            expect(isObject(new Map()))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isObject(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isObject(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isObject(NaN))
                .toBe(false)
            expect(isObject(true))
                .toBe(false)
            expect(isObject(""))
                .toBe(false)


        })
    })
})
