import append from "./append"



describe(`function append(x, xs)`, () => {
    context(`xs is empty`, () => {
        it(`should return xs`, () => {
            const xs = []

            expect(append(0, xs))
                .toEqual([ 0 ])
        })

        it(`should not mutate xs`, () => {
            const xs = []

            expect(append(0, xs))
                .not.toBe(xs)
        })
    })

    context(`xs is not empty`, () => {
        it(`should remove last item from xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(append(55, xs))
                .toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])
        })

        it(`should not mutate xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(append(55, xs))
                .not.toBe(xs)
        })
    })
})
