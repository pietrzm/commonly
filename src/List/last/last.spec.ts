import last from "./last"



describe(`Module "List" -> Function "head"`, () => {
    it("should return last value from the list.", () => {
        expect(last([ 1, 2, 3, 5 ]))
            .toEqual(5)

        expect(last([ 5, 3, 2, 1 ]))
            .toEqual(1)
    })
})