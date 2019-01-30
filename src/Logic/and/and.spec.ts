import and from "./and"



describe(`function and(a, b)`, () => {
    context(`a and b are booleans`, () => {
        context(`a is true`, () => {
            it(`should return true`, () => {
                expect(and(true, true))
                    .toBe(true)
            })
        })

        context(`a is false`, () => {
            it(`should return false`, () => {
                expect(and(false, false))
                    .toBe(false)
                expect(and(false, true))
                    .toBe(false)
                expect(and(true, false))
                    .toBe(false)
            })
        })
    })

    context(`a or b is anything`, () => {
        context(`a is truthy`, () => {
            it(`should return b`, () => {
                const subject = Symbol()

                expect(and(true, subject))
                    .toBe(subject)
                expect(and(1, subject))
                    .toBe(subject)
                expect(and(Infinity, subject))
                    .toBe(subject)
            })
        })

        context(`a is falsy`, () => {
            it(`should return a`, () => {
                const subject = Symbol()

                expect(and(false, subject))
                    .toBe(false)
                expect(and(0, subject))
                    .toBe(0)
                expect(and(NaN, subject))
                    .toBe(NaN)
            })
        })
    })
})
