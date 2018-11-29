import slice from "./slice"


describe(`Module "List" -> Function "slice"`, () => {
    it("should return values from in between specified indices of the list.", () => {
        expect(slice(0, 3, [ 1, 2, 3, 5 ]))
            .toEqual([ 1, 2, 3 ])

        expect(slice(0, 2, [ 5, 3, 2, 1 ]))
            .toEqual([ 5, 3 ])

        expect(slice(1, 3, [ 1, 2, 3, 5 ]))
            .toEqual([ 2, 3 ])
    })
})