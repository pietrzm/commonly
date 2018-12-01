import isTypedArray from "./isTypedArray"



describe(`Module "Type" -> Function "isArray"`, () => {
    it("should preform a check if a given value is a TypedArray.", () => {
        expect(isTypedArray(undefined))
            .toBe(false)
        expect(isTypedArray(null))
            .toBe(false)

        expect(isTypedArray(0))
            .toBe(false)
        expect(isTypedArray(true))
            .toBe(false)
        expect(isTypedArray(""))
            .toBe(false)

        expect(isTypedArray(Symbol()))
            .toBe(false)

        expect(isTypedArray([]))
            .toBe(false)
        expect(isTypedArray({}))
            .toBe(false)
    })
})