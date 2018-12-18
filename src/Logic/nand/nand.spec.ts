import nand from "./nand";



describe(`function nand(a, b)`, () => {
    context(`a and b are booleans`, () => {
        context(`a and b are true`, () => {
            it(`should return false`, () => {
                expect(nand(true, true))
                    .toBe(false)
            })
        })

        context(`a or b is false`, () => {
            it(`should return true`, () => {
                expect(nand(false, false))
                    .toBe(true)
                expect(nand(false, true))
                    .toBe(true)
                expect(nand(true, false))
                    .toBe(true)
            })
        })
    })

    context(`a or b is anything`, () => {
        context(`a is truthy`, () => {
            it(`should return false`, () => {
                const subject = Symbol()

                expect(nand(true, subject))
                    .toBe(false)
                expect(nand(1, subject))
                    .toBe(false)
                expect(nand(Infinity, subject))
                    .toBe(false)
            })
        })

        context(`a is falsy`, () => {
            it(`should return true`, () => {
                const subject = Symbol()

                expect(nand(false, subject))
                    .toBe(true)
                expect(nand(0, subject))
                    .toBe(true)
                expect(nand(NaN, subject))
                    .toBe(true)
            })
        })
    })
})