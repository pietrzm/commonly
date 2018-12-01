import head from "./head"



describe(`Module "List" -> Function "head"`, () => {
    it("should return a first value from the list.", () => {
        expect(head([ 1, 2, 3, 5 ]))
            .toEqual(1)

        expect(head([ 5, 3, 2, 1 ]))
            .toEqual(5)
    })
})