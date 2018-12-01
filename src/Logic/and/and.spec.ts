import and from "./and";



describe(`Module "Logic" -> Function "and"`, () => {
    it("should preform a logical conjunction of two given boolean values.", () => {
        expect(and(false, false))
            .toBe(false)

        expect(and(false, true))
            .toBe(false)

        expect(and(true, false))
            .toBe(false)

        expect(and(true, true))
            .toBe(true)
    })

    it("should be a curried function.", () => {
        expect(() => and(false)(false))
            .not.toThrow()
    })
})