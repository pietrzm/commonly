import isFunction from "./isFunction"


describe(`Module "Type" -> Function "isFunction"`, () => {
    it("should preform a check if a given value is a Function.", () => {
        expect(isFunction(undefined))
            .toBe(false)
        expect(isFunction(null))
            .toBe(false)

        expect(isFunction(0))
            .toBe(false)
        expect(isFunction(true))
            .toBe(false)
        expect(isFunction(""))
            .toBe(false)

        expect(isFunction(Symbol()))
            .toBe(false)

        expect(isFunction([]))
            .toBe(false)
        expect(isFunction({}))
            .toBe(false)


        expect(isFunction(() => null))
            .toBe(true)
    })
})