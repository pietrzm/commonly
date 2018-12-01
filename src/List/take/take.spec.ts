import take from "./take"



describe(`Module "List" -> Function "take"`, () => {
    it("should return a N first values from the list.", () => {
        expect(take(3, [ 1, 2, 3, 5 ]))
            .toEqual([ 1, 2, 3 ])

        expect(take(2, [ 5, 3, 2, 1 ]))
            .toEqual([ 5, 3 ])
    })
})