import isObject from "./isObject"



describe(`Module "Type" -> Function "isObject"`, () => {
    it("should preform a check if a given value is an Object.", () => {
        expect(isObject(undefined))
            .toBe(false)
        expect(isObject(null))
            .toBe(false)

        expect(isObject(0))
            .toBe(false)
        expect(isObject(true))
            .toBe(false)
        expect(isObject(""))
            .toBe(false)

        expect(isObject(Symbol()))
            .toBe(false)

        expect(isObject([]))
            .toBe(true)
        expect(isObject({}))
            .toBe(true)
    })
})