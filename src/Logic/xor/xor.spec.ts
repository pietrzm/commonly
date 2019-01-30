import xor from "./xor"



describe(`function or(a, b)`, () => {
    context(`a and b are booleans`, () => {
        context(`a and b are not equal`, () => {
            it(`should return true`, () => {
                expect(xor(false, true))
                    .toBe(true)
                expect(xor(true, false))
                    .toBe(true)
            })
        })

        context(`a and b are equal`, () => {
            it(`should return false`, () => {
                expect(xor(false, false))
                    .toBe(false)
                expect(xor(true, true))
                    .toBe(false)
            })
        })
    })

    context(`a or b is anything`, () => {
        context(`a and b are not equal`, () => {
            it(`should return true`, () => {
                expect(xor(NaN, Infinity))
                    .toBe(true)
                expect(xor(1, Infinity))
                    .toBe(true)
                expect(xor(0, NaN))
                    .toBe(true)
                expect(xor(NaN, NaN))
                    .toBe(true)
            })
        })

        context(`a and b are equal`, () => {
            it(`should return false`, () => {
                const subject = Symbol()

                expect(xor(subject, subject))
                    .toBe(false)
                expect(xor(0, 0))
                    .toBe(false)
            })
        })
    })
})
