import isMap from "./isMap"



describe(`function isMap(x)`, () => {
    context(`x is a Map`, () => {
        it(`should return true`, () => {
            const subject = new Map()

            expect(isMap(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isMap(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isMap(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isMap(NaN))
                .toBe(false)
            expect(isMap(true))
                .toBe(false)
            expect(isMap(""))
                .toBe(false)

            expect(isMap({}))
                .toBe(false)
            expect(isMap([]))
                .toBe(false)
            expect(isMap(new Set()))
                .toBe(false)
        })
    })
})
