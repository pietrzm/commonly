import tail from "./tail"


describe(`Module "List" -> Function "tail"`, () => {
    it("should return a first value from the list.", () => {
        expect(tail([ 1, 2, 3, 5 ]))
            .toEqual([ 2, 3, 5 ])

        expect(tail([ 5, 3, 2, 1 ]))
            .toEqual([ 3, 2, 1 ])
    })
})