import map from "./map"
import identity from "Function/identity/identity"
import multiply from "Math/multiply/multiply"




describe(`function map(mapper, xs: Array)`, () => {
    context(`case: isEmpty(xs)`, () => {
        it(`should return an empty Array`, () => {
            const subject = []

            expect(map(multiply(2), subject))
                .toEqual([])
        })
    })

    context(`case: not(isEmpty(xs))`, () => {
        it(`should return an Array, where every value "x" is replaced by a value "f(x)"`, () => {
            const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(map(multiply(2), subject))
                .toEqual([ 0, 2, 2, 4, 6, 10, 16, 26, 42, 68 ])
        })
    })

    context(`case: in === out`, () => {
        it(`should return a new Array`, () => {
            const subjectA = [],
                subjectB = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(map(identity, subjectA))
                .not.toBe(subjectA)
            expect(map(identity, subjectB))
                .not.toBe(subjectB)

            expect(map(multiply(2), subjectA))
                .not.toBe(subjectA)
            expect(map(multiply(2), subjectB))
                .not.toBe(subjectB)
        })
    })
})


describe(`function map(mapper, xs: String)`, () => {
    context(`case: isEmpty(xs)`, () => {
        it(`should return an empty String`, () => {
            const subject = ""

            expect(map(multiply(2), subject))
                .toEqual("")
        })
    })

    context(`case: not(isEmpty(xs))`, () => {
        it(`should return a String, where every value "x" is replaced by a value "f(x)"`, () => {
            const subject = "0112358"

            expect(map(multiply(2), subject))
                .toEqual("022461016")
        })
    })

    context(`case: in === out`, () => {
        it(`should return a new String`, () => {
            const subject = "0112358"

            expect(map(multiply(2), subject))
                .not.toBe(subject)
        })

        it(`should return the same String`, () => {
            const subjectA = "",
                subjectB = "0112358"

            expect(map(identity, subjectA))
                .toBe(subjectA)
            expect(map(identity, subjectB))
                .toBe(subjectB)

            expect(map(multiply(2), subjectA))
                .toBe(subjectA)
        })
    })
})


describe(`function map(mapper, xs: Set)`, () => {
    context(`case: isEmpty(xs)`, () => {
        it(`should return an empty Set`, () => {
            const subject = new Set()

            expect(map(multiply(2), subject))
                .toEqual(new Set())
        })
    })

    context(`case: not(isEmpty(xs))`, () => {
        it(`should return a Set, where every value "x" is replaced by a value "f(x)"`, () => {
            const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(map(multiply(2), subject))
                .toEqual(new Set([ 0, 2, 4, 6, 10, 16, 26, 42, 68 ]))
        })
    })

    context(`case: in === out`, () => {
        it(`should return a new Set`, () => {
            const subjectA = new Set(),
                subjectB = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

            expect(map(identity, subjectA))
                .not.toBe(subjectA)
            expect(map(identity, subjectB))
                .not.toBe(subjectB)

            expect(map(multiply(2), subjectA))
                .not.toBe(subjectA)
            expect(map(multiply(2), subjectB))
                .not.toBe(subjectB)
        })
    })
})


describe(`function map(mapper, xs: Map)`, () => {
    context(`case: isEmpty(xs)`, () => {
        it(`should return an empty Set`, () => {
            const subject = new Map()

            expect(map(multiply(2), subject))
                .toEqual(new Map())
        })
    })

    context(`case: not(isEmpty(xs))`, () => {
        it(`should return a Set, where every value "x" is replaced by a value "f(x)"`, () => {
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

    context(`case: in === out`, () => {
        it(`should return a new Set`, () => {
            const subjectA = new Map(),
                subjectB = new Map([
                    [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
                    [ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
                ])

            expect(map(identity, subjectA))
                .not.toBe(subjectA)
            expect(map(identity, subjectB))
                .not.toBe(subjectB)

            expect(map(([ k, x ]) => multiply(2, x), subjectA))
                .not.toBe(subjectA)
            expect(map(([ k, x ]) => multiply(2, x), subjectB))
                .not.toBe(subjectB)
        })
    })
})