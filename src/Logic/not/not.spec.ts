import not from "./not";



describe(`function not(x)`, () => {
    context(`x is a boolean`, () => {
        context(`x is true`, () => {
            it(`should return false`, () => {
                expect(not(true))
                    .toBe(false)
            })
        })

        context(`x is false`, () => {
            it(`should return true`, () => {
                expect(not(false))
                    .toBe(true)
            })
        })
    })

    context(`x is anything`, () => {
        context(`x is truthy`, () => {
            it(`should return false`, () => {
                expect(not(1))
                    .toBe(false)
                expect(not(Infinity))
                    .toBe(false)
            })
        })

        context(`x is falsy`, () => {
            it(`should return true`, () => {
                expect(not(0))
                    .toBe(true)
                expect(not(NaN))
                    .toBe(true)
            })
        })
    })
})