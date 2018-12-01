import isBoolean from "./isBoolean"



describe(`Module "Type" -> Function "isBoolean"`, () => {
    it("should preform a check if a given value is a boolean.", () => {
        expect(isBoolean(undefined))
            .toBe(false)
        expect(isBoolean(null))
            .toBe(false)

        expect(isBoolean(0))
            .toBe(false)
        expect(isBoolean(true))
            .toBe(true)
        expect(isBoolean(""))
            .toBe(false)

        expect(isBoolean(Symbol()))
            .toBe(false)

        expect(isBoolean([]))
            .toBe(false)
        expect(isBoolean({}))
            .toBe(false)
    })
})