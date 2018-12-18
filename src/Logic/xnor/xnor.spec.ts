import xnor from "./xnor";



describe(`function or(a, b)`, () => {
    context(`a and b are booleans`, () => {
        context(`a and b are not equal`, () => {
            it(`should return false`, () => {
                expect(xnor(false, true))
                    .toBe(false)
                expect(xnor(true, false))
                    .toBe(false)
            })
        })

        context(`a and b are equal`, () => {
            it(`should return true`, () => {
                expect(xnor(false, false))
                    .toBe(true)
                expect(xnor(true, true))
                    .toBe(true)
            })
        })
    })

    context(`a or b is anything`, () => {
        context(`a and b are not equal`, () => {
            it(`should return false`, () => {
                expect(xnor(NaN, Infinity))
                    .toBe(false)
                expect(xnor(1, Infinity))
                    .toBe(false)
                expect(xnor(0, NaN))
                    .toBe(false)
                expect(xnor(NaN, NaN))
                    .toBe(false)
            })
        })

        context(`a and b are equal`, () => {
            it(`should return true`, () => {
                const subject = Symbol()

                expect(xnor(subject, subject))
                    .toBe(true)
                expect(xnor(0, 0))
                    .toBe(true)
            })
        })
    })
})