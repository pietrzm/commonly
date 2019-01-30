import reducer  from "Function/reducer/reducer"

import identity from "Function/identity/identity"



describe(`function reducer(xs)`, () => {
    it(`should return a reducer.undefined function`, () => {
        const subject = reducer(undefined)

        expect(subject)
            .toBe(reducer.undefined)
    })

    it(`should return a reducer.array function`, () => {
        const subject = reducer([])

        expect(subject)
            .toBe(reducer.array)
    })

    it(`should return a reducer.string function`, () => {
        const subject = reducer("")

        expect(subject)
            .toBe(reducer.string)
    })

    it(`should return a reducer.string function`, () => {
        const subject = reducer(new Set())

        expect(subject)
            .toBe(reducer.set)
    })

    it(`should return a reducer.map function`, () => {
        const subject = reducer(new Map())

        expect(subject)
            .toBe(reducer.map)
    })
})


describe(`function reducer.undefined(accumulator, value)`, () => {
    it(`should be an identity function`, () => {
        const subject = reducer.undefined

        expect(subject)
            .toBe(identity)
    })

    it(`should be an undefined's reducer`, () => {
        const subject = reducer.undefined(undefined)

        expect(subject)
            .toEqual(undefined)
    })
})


describe(`function reducer.array(accumulator, value)`, () => {
    it(`should be a reducer`, () => {
        const subject = reducer.array

        expect(subject.length)
            .toEqual(2)
    })

    it(`should be an Array's reducer`, () => {
        const subject = reducer.array([ 0, 1, 1, 2, 3, 5 ], 7)

        expect(subject)
            .toEqual([ 0, 1, 1, 2, 3, 5, 7 ])
    })
})


describe(`function reducer.string(accumulator, value)`, () => {
    it(`should be a reducer`, () => {
        const subject = reducer.string

        expect(subject.length)
            .toEqual(2)
    })

    it(`should be a String's reducer`, () => {
        const subject = reducer.string("011235", "7")

        expect(subject)
            .toEqual("0112357")
    })
})


describe(`function reducer.set(accumulator, value)`, () => {
    it(`should be a reducer`, () => {
        const subject = reducer.set

        expect(subject.length)
            .toEqual(2)
    })

    it(`should be a Set's reducer`, () => {
        const subject = reducer.set(new Set([ 0, 1, 1, 2, 3, 5 ]), 7)

        expect(subject)
            .toEqual(new Set([ 0, 1, 1, 2, 3, 5, 7 ]))
    })
})


describe(`function reducer.map(accumulator, value)`, () => {
    it(`should be a reducer`, () => {
        const subject = reducer.map

        expect(subject.length)
            .toEqual(2)
    })

    it(`should be a Map's reducer`, () => {
        const subject = reducer.map(new Map([
            [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],
            [ "D", 2 ], [ "E", 3 ], [ "D", 5 ]
        ]), [ "E", 7 ])

        expect(subject)
            .toEqual(new Map([
                [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],
                [ "D", 2 ], [ "E", 3 ], [ "D", 5 ],
                [ "E", 7 ]
            ]))
    })
})
