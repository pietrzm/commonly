import tail from "./tail"



describe(`function tail(xs: [])`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs: unknown[] = []
            expect(tail(xs))
                .toEqual([])
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a tail of a xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
            expect(tail(xs))
                .toEqual([ 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
        })
    })
})

describe(`function tail(xs: string)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = ""
            expect(tail(xs))
                .toEqual("")
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a tail of a xs`, () => {
            const xs = "0112358"
            expect(tail(xs))
                .toEqual("112358")
        })
    })
})

describe(`function tail(xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = new Set()
            expect(tail(xs))
                .toEqual(new Set())
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a tail of a xs`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
            expect(tail(xs))
                .toEqual(new Set([ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]))
        })
    })
})
