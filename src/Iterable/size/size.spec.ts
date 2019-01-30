import size from "./size"



describe(`function size(xs: Array)`, () => {
    context(`xs is empty`, () => {
        it(`should return a number 0`, () => {
            expect(size([]))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a number 1`, () => {
            expect(size([ 0 ]))
                .toEqual(1)
        })

        it(`should return a number 5`, () => {
            expect(size([ 0, 1, 1, 2, 3 ]))
                .toEqual(5)
        })
    })
})


describe(`function size(xs: Set)`, () => {
    context(`xs is empty`, () => {
        it(`should return a number 0`, () => {
            expect(size(new Set()))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a number 1`, () => {
            expect(size(new Set([ 0 ])))
                .toEqual(1)
        })

        it(`should return a number 4`, () => {
            expect(size(new Set([ 0, 1, 1, 2, 3 ])))
                .toEqual(4)
        })
    })
})


describe(`function size(xs: Map)`, () => {
    context(`xs is empty`, () => {
        it(`should return a number 0`, () => {
            expect(size(new Map()))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a number 1`, () => {
            expect(size(new Map([ [ "A", 0 ] ])))
                .toEqual(1)
        })

        it(`should return a number 5`, () => {
            expect(size(new Map([ [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ] ])))
                .toEqual(5)
        })
    })
})
