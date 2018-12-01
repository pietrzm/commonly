import isNill from "./isNill"



describe(`Module "Type" -> Function "isNill"`, () => {
    it("should preform a check if a given value is an undefined or null.", () => {
        expect(isNill(undefined))
            .toBe(true)
        expect(isNill(null))
            .toBe(true)

        expect(isNill(0))
            .toBe(false)
        expect(isNill(true))
            .toBe(false)
        expect(isNill(""))
            .toBe(false)

        expect(isNill(Symbol()))
            .toBe(false)

        expect(isNill([]))
            .toBe(false)
        expect(isNill({}))
            .toBe(false)
    })
})