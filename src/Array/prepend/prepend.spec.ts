import prepend from "./prepend"



describe(`function prepend(x, xs)`, () => {
    context(`xs is empty`, () => {
        it(`should return xs`, () => {
            const xs = []

            expect(prepend(0, xs))
                .toEqual([ 0 ])
        })

        it(`should not mutate xs`, () => {
            const xs = []

            expect(prepend(0, xs))
                .not.toBe(xs)
        })
    })

    context(`xs is not empty`, () => {
        it(`should remove last item from xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(prepend(-1, xs))
                .toEqual([ -1, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
        })

        it(`should not mutate xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(prepend(-1, xs))
                .not.toBe(xs)
        })
    })
})
