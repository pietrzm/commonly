import or from "./or";



describe(`Module "Logic" -> Function "or"`, () => {
    it("should preform a logical disjunction of two given boolean values.", () => {
        expect(or(false, false))
            .toBe(false)

        expect(or(false, true))
            .toBe(true)

        expect(or(true, false))
            .toBe(true)

        expect(or(true, true))
            .toBe(true)
    })

    it("should be a curried function.", () => {
        expect(() => or(false)(false))
            .not.toThrow()
    })
})