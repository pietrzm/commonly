import slice from "./slice"



describe(`function slice(i: number, j: number, xs: [])`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs: unknown[] = []
            expect(slice(3, 5, xs))
                .toEqual([])
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
            expect(slice(3, 5, xs))
                .toEqual([ 2, 3 ])
        })
    })
})

describe(`function slice(i: number, j: number, xs: string)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = ""
            expect(slice(3, 5, xs))
                .toEqual("")
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = "0112358"
            expect(slice(3, 5, xs))
                .toEqual("23")
        })
    })
})

describe(`function slice(i: number, j: number, xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = new Set()
            expect(slice(3, 5, xs))
                .toEqual(new Set())
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
            expect(slice(3, 5, xs))
                .toEqual(new Set([ 3, 5 ]))
        })
    })
})
