import not from "./not";



describe(`Module "Logic" -> Function "not"`, () => {
    it("should preform a logical negation of a given boolean value.", () => {
        expect(not(false))
            .toBe(true)

        expect(not(true))
            .toBe(false)
    })
})