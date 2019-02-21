import nth from "./nth"



describe(`function nth(i, xs: Array)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = []

            expect(nth(3, xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Array`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(nth(3, xs))
                .toEqual(2)
        })
    })
})


describe(`function nth(i, xs: String)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = ""

            expect(nth(3, xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped String`, () => {
            const xs = "0112358"

            expect(nth(3, xs))
                .toEqual("2")
        })
    })
})


describe(`function nth(i, xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = new Set()

            expect(nth(3, xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Set`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(nth(3, xs))
                .toEqual(3)
        })
    })
})


describe(`function nth(i, xs: Map)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = new Map()

            expect(nth(3, xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Array`, () => {
            const xs = new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
            ])

            expect(nth(3, xs))
                .toEqual([ "D", 2 ])
        })
    })
})
