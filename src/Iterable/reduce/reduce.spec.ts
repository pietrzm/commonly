import reduce   from "./reduce"

import compose  from "Function/compose/compose"
import reduced  from "Function/reduced/reduced"
import add      from "Math/add/add"



describe(`function reduce(reducer, accumulator, xs: Array)`, () => {
    context(`xs is empty`, () => {
        it(`should return an accumulator`, () => {
            const xs = []

            expect(reduce(add, 0, xs))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a sum of numbers`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(reduce(add, 0, xs))
                .toEqual(88)
        })

        it(`should return an early reduced number`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
            const reducer = compose((x) => ((x > 7) ? reduced(x) : x), add)

            expect(reduce(reducer, 0, xs))
                .toEqual(12)
        })
    })
})


describe(`function reduce(reducer, accumulator, xs: String)`, () => {
    context(`xs is empty`, () => {
        it(`should return an accumulator`, () => {
            const xs = ""

            expect(reduce(add, 0, xs))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a sum of numbers`, () => {
            const xs = "0112358"

            expect(reduce(add, 0, xs))
                .toEqual("00112358")
        })

        it(`should return an early reduced number`, () => {
            const xs = "0112358"
            const reducer = compose((x) => ((x > 7) ? reduced(x) : x), add)

            expect(reduce(reducer, 0, xs))
                .toEqual("0011")
        })
    })
})


describe(`function reduce(reducer, accumulator, xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an accumulator`, () => {
            const xs = new Set()

            expect(reduce(add, 0, xs))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a sum of numbers`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(reduce(add, 0, xs))
                .toEqual(87)
        })

        it(`should return an early reduced number`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
            const reducer = compose((x) => ((x > 7) ? reduced(x) : x), add)

            expect(reduce(reducer, 0, xs))
                .toEqual(11)
        })
    })
})


describe(`function reduce(reducer, accumulator, xs: Map)`, () => {
    context(`xs is empty`, () => {
        it(`should return an accumulator`, () => {
            const xs = new Map()

            expect(reduce(add, 0, xs))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a sum of numbers`, () => {
            const xs = new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
            ])

            expect(reduce(([, x ], [, y ]) => [ null, add(x, y) ], [ null, 0 ], xs))
                .toEqual([ null, 88 ])
        })

        it(`should return an early reduced number`, () => {
            const xs = new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
            ])
            const reducer = compose((
                [__, x ]) =>
                    (x > 7) ?
                        reduced([__, x ]) : [__, x ],
                ([, x ], [, y ]) =>
                    [ null, add(x, y) ]
            )

            expect(reduce(reducer, [ null, 0 ], xs))
                .toEqual([ null, 12 ])
        })
    })
})