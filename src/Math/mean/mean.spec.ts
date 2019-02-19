import mean from "Math/mean/mean"



describe(`function mean(numbers)`, () => {
    context(`numbers is empty`, () => {
        it(`should return NaN value`, () => {
            const numbers = []

            expect(mean(numbers))
                .toEqual(NaN)
        })
    })

    context(`numbers is not empty`, () => {
        it(`should return a mean for a given array`, () => {
            const numbers = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(mean(numbers))
                .toEqual(8.8)
        })
    })
})
