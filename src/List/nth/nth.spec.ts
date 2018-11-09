import nth from "./nth"


describe(`Module "List" -> Function "nth"`, () => {
    it("should return a value at given index from the list.", () => {
        expect(nth(0, [ 1, 2, 3, 5 ]))
            .toEqual(1)

        expect(nth(3, [ 1, 2, 3, 5 ]))
            .toEqual(5)

        expect(nth(0, [ 5, 3, 2, 1 ]))
            .toEqual(5)

        expect(nth(3, [ 5, 3, 2, 1 ]))
            .toEqual(1)
    })
})