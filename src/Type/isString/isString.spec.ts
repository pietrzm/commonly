import isString from "./isString"


describe(`Module "Type" -> Function "isString"`, () => {
    it("should preform a check if a given value is a string.", () => {
        expect(isString(undefined))
            .toBe(false)
        expect(isString(null))
            .toBe(false)

        expect(isString(0))
            .toBe(false)
        expect(isString(true))
            .toBe(false)
        expect(isString(""))
            .toBe(true)

        expect(isString(Symbol()))
            .toBe(false)

        expect(isString([]))
            .toBe(false)
        expect(isString({}))
            .toBe(false)
    })
})