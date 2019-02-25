import take from "./take"



describe(`function take(n: number, xs: [])`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs: unknown[] = []
            expect(take(3, xs))
                .toEqual([])
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
            expect(take(3, xs))
                .toEqual([ 0, 1, 1 ])
        })
    })
})

describe(`function take(n: number, xs: string)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = ""
            expect(take(3, xs))
                .toEqual("")
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = "0112358"
            expect(take(3, xs))
                .toEqual("011")
        })
    })
})

describe(`function take(n: number, xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return an empty xs`, () => {
            const xs = new Set()
            expect(take(3, xs))
                .toEqual(new Set())
        })
    })

    context(`xs is not empty`, () => {
        it(`should return first n elements of a xs`, () => {
            const xs = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
            expect(take(3, xs))
                .toEqual(new Set([ 0, 1, 1, 2 ]))
        })
    })
})
