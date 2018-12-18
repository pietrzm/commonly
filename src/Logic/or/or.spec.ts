import or from "./or";



describe(`function or(a, b)`, () => {
    context(`a and b are booleans`, () => {
        context(`a or b is true`, () => {
            it(`should return true`, () => {
                expect(or(false, true))
                    .toBe(true)
                expect(or(true, false))
                    .toBe(true)
                expect(or(true, true))
                    .toBe(true)
            })
        })

        context(`a and b are false`, () => {
            it(`should return false`, () => {
                expect(or(false, false))
                    .toBe(false)
            })
        })
    })

    context(`a or b is anything`, () => {
        context(`a is truthy`, () => {
            it(`should return a`, () => {
                const subject = Symbol()

                expect(or(true, subject))
                    .toBe(true)
                expect(or(1, subject))
                    .toBe(1)
                expect(or(Infinity, subject))
                    .toBe(Infinity)
            })
        })

        context(`a is falsy`, () => {
            it(`should return b`, () => {
                const subject = Symbol()

                expect(or(false, subject))
                    .toBe(subject)
                expect(or(0, subject))
                    .toBe(subject)
                expect(or(NaN, subject))
                    .toBe(subject)
            })
        })
    })
})