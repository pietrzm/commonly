import isEven from "./isEven"



describe(`function isEven(number)`, () => {
    context(`number is a number`, () => {
        it(`should return true when number is even`, () => {
            expect(isEven(2))
                .toBe(true)
            expect(isEven(4))
                .toBe(true)
            expect(isEven(16))
                .toBe(true)
        })

        it(`should return false when number is odd`, () => {
            expect(isEven(3))
                .toBe(false)
            expect(isEven(9))
                .toBe(false)
            expect(isEven(81))
                .toBe(false)
        })
    })

    context(`number is a string`, () => {
        it(`should return true when number is even`, () => {
            expect(isEven("2"))
                .toBe(true)
            expect(isEven("4"))
                .toBe(true)
            expect(isEven("16"))
                .toBe(true)
        })

        it(`should return false when number is odd`, () => {
            expect(isEven("3"))
                .toBe(false)
            expect(isEven("9"))
                .toBe(false)
            expect(isEven("81"))
                .toBe(false)
        })
    })
})
