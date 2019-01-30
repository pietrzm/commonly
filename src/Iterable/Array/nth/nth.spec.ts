import nth from "./nth"



describe(`function nth(i, xs)`, () => {
    context(`i is 0`, () => {
        it(`should return first element of xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(nth(0, xs))
                .toEqual(0)
        })
    })

    context(`i is equal to last index in xs`, () => {
        it(`should return last element of xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(nth(xs.length - 1, xs))
                .toEqual(34)
        })
    })

    context(`i is a negative number`, () => {
        it(`should return last element of xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(nth(-2, xs))
                .toEqual(21)
        })
    })

    context(`i is greater than last index in xs`, () => {
        it(`should return last element of xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(nth(xs.length, xs))
                .toEqual(undefined)
        })
    })
})
