import map from "./map"

import multiply from "Math/multiply/multiply"



describe(`function map(mapper, xs: Array)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty Array`, () => {
            const subject = []

            expect(map(multiply(2), subject))
                .toEqual([])
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Array`, () => {
            const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(map(multiply(2), subject))
                .toEqual([ 0, 2, 2, 4, 6, 10, 16, 26, 42, 68 ])
        })
    })
})


describe(`function map(mapper, xs: String)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty String`, () => {
            const subject = ""

            expect(map(multiply(2), subject))
                .toEqual("")
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped String`, () => {
            const subject = "0112358"

            expect(map(multiply(2), subject))
                .toEqual("022461016")
        })
    })
})


describe(`function map(mapper, xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty Set`, () => {
            const subject = new Set()

            expect(map(multiply(2), subject))
                .toEqual(new Set())
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Set`, () => {
            const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(map(multiply(2), subject))
                .toEqual(new Set([ 0, 2, 4, 6, 10, 16, 26, 42, 68 ]))
        })
    })
})


describe(`function map(mapper, xs: Map)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty Set`, () => {
            const subject = new Map()

            expect(map(multiply(2), subject))
                .toEqual(new Map())
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a mapped Array`, () => {
            const subject = new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
            ])

            expect(map(([ k, x ]) => [ k, multiply(2, x) ], subject))
                .toEqual(new Map([
                    [ "A", 0 ], [ "B", 2 ], [ "C", 2 ],  [ "D", 4 ],  [ "E", 6 ],
                    [ "F", 10 ], [ "G", 16 ], [ "H", 26 ], [ "I", 42 ], [ "J", 68 ]
                ]))
        })
    })
})