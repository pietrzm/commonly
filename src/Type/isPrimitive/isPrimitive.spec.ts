import isPrimitive from "./isPrimitive"



describe(`Module "Type" -> Function "isPrimitive"`, () => {
    it("should preform a check if a given value is an Object.", () => {
        expect(isPrimitive(undefined))
            .toBe(true)
        expect(isPrimitive(null))
            .toBe(true)

        expect(isPrimitive(0))
            .toBe(true)
        expect(isPrimitive(true))
            .toBe(true)
        expect(isPrimitive(""))
            .toBe(true)

        expect(isPrimitive(Symbol()))
            .toBe(true)

        expect(isPrimitive([]))
            .toBe(false)
        expect(isPrimitive({}))
            .toBe(false)
    })
})