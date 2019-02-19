import isSet from "./isSet"



describe(`function isSet(x)`, () => {
    context(`x is a Set`, () => {
        it(`should return true`, () => {
            const subject = new Set()

            expect(isSet(subject))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isSet(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isSet(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isSet(NaN))
                .toBe(false)
            expect(isSet(true))
                .toBe(false)
            expect(isSet(""))
                .toBe(false)

            expect(isSet({}))
                .toBe(false)
            expect(isSet([]))
                .toBe(false)
            expect(isSet(new Map()))
                .toBe(false)
        })
    })
})
