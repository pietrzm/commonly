import isArray from "./isArray"


describe(`Module "Type" -> Function "isArray"`, () => {
    it("should preform a check if a given value is an Array.", () => {
        expect(isArray(undefined))
            .toBe(false)
        expect(isArray(null))
            .toBe(false)

        expect(isArray(0))
            .toBe(false)
        expect(isArray(true))
            .toBe(false)
        expect(isArray(""))
            .toBe(false)

        expect(isArray(Symbol()))
            .toBe(false)

        expect(isArray([]))
            .toBe(true)
        expect(isArray({}))
            .toBe(false)
    })
})