import isError from "./isError"



describe(`Module "Type" -> Function "isError"`, () => {
    it("should preform a check if a given value is a Set.", () => {
        expect(isError(undefined))
            .toBe(false)
        expect(isError(null))
            .toBe(false)

        expect(isError(0))
            .toBe(false)
        expect(isError(true))
            .toBe(false)
        expect(isError(""))
            .toBe(false)

        expect(isError(Symbol()))
            .toBe(false)

        expect(isError([]))
            .toBe(false)
        expect(isError({}))
            .toBe(false)


        expect(isError(new Error()))
            .toBe(true)
    })
})