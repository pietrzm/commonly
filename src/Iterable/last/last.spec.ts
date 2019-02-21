import last from "./last"



describe(`function last(xs: Array)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = []

            expect(last(xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a last element of xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(last(xs))
                .toEqual(34)
        })
    })
})


describe(`function last(xs: String)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = ""

            expect(last(xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a last element of xs`, () => {
            const xs = "0112358"

            expect(last(xs))
                .toEqual("8")
        })
    })
})


describe(`function last(xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = new Set()

            expect(last(xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a last element of xs`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(last(xs))
                .toEqual(34)
        })
    })
})


describe(`function last(xs: Map)`, () => {
    context(`xs is empty`, () => {
        it(`should return an undefined`, () => {
            const xs = new Map()

            expect(last(xs))
                .toEqual(undefined)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a last element of xs`, () => {
            const xs = new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
            ])

            expect(last(xs))
                .toEqual([ "J", 34 ])
        })
    })
})
