import isNull from "./isNull"


describe(`Module "Type" -> Function "isNull"`, () => {
    it("should preform a check if a given value is a null.", () => {
        expect(isNull(undefined))
            .toBe(false)
        expect(isNull(null))
            .toBe(true)

        expect(isNull(0))
            .toBe(false)
        expect(isNull(true))
            .toBe(false)
        expect(isNull(""))
            .toBe(false)

        expect(isNull(Symbol()))
            .toBe(false)

        expect(isNull([]))
            .toBe(false)
        expect(isNull({}))
            .toBe(false)
    })
})