import isOdd from "./isOdd"



describe(`function isOdd(number)`, () => {
    context(`number is a number`, () => {
        it(`should return true when number is odd`, () => {
            expect(isOdd(3))
                .toBe(true)
            expect(isOdd(9))
                .toBe(true)
            expect(isOdd(81))
                .toBe(true)
        })

        it(`should return false when number is even`, () => {
            expect(isOdd(2))
                .toBe(false)
            expect(isOdd(4))
                .toBe(false)
            expect(isOdd(16))
                .toBe(false)
        })
    })

    context(`number is a string`, () => {
        it(`should return true when number is odd`, () => {
            expect(isOdd("3"))
                .toBe(true)
            expect(isOdd("9"))
                .toBe(true)
            expect(isOdd("81"))
                .toBe(true)
        })

        it(`should return false when number is even`, () => {
            expect(isOdd("2"))
                .toBe(false)
            expect(isOdd("4"))
                .toBe(false)
            expect(isOdd("16"))
                .toBe(false)
        })
    })
})
