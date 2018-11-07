import isUndefined from "./isUndefined"


describe(`Module "Type" -> Function "isUndefined"`, () => {
    it("should preform a check if a given value is an undefined.", () => {
        expect(isUndefined(undefined))
            .toBe(true)
        expect(isUndefined(null))
            .toBe(false)

        expect(isUndefined(0))
            .toBe(false)
        expect(isUndefined(true))
            .toBe(false)
        expect(isUndefined(""))
            .toBe(false)

        expect(isUndefined(Symbol()))
            .toBe(false)

        expect(isUndefined([]))
            .toBe(false)
        expect(isUndefined({}))
            .toBe(false)
    })
})