import isNumber from "./isNumber"


describe(`Module "Type" -> Function "isNumber"`, () => {
    it("should preform a check if a given value is a number.", () => {
        expect(isNumber(undefined))
            .toBe(false)
        expect(isNumber(null))
            .toBe(false)

        expect(isNumber(0))
            .toBe(true)
        expect(isNumber(true))
            .toBe(false)
        expect(isNumber(""))
            .toBe(false)

        expect(isNumber(Symbol()))
            .toBe(false)

        expect(isNumber([]))
            .toBe(false)
        expect(isNumber({}))
            .toBe(false)
    })
})