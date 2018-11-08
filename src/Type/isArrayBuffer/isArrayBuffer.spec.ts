import isArrayBuffer from "./isArrayBuffer"


describe(`Module "Type" -> Function "isArrayBuffer"`, () => {
    it("should preform a check if a given value is a Set.", () => {
        expect(isArrayBuffer(undefined))
            .toBe(false)
        expect(isArrayBuffer(null))
            .toBe(false)

        expect(isArrayBuffer(0))
            .toBe(false)
        expect(isArrayBuffer(true))
            .toBe(false)
        expect(isArrayBuffer(""))
            .toBe(false)

        expect(isArrayBuffer(Symbol()))
            .toBe(false)

        expect(isArrayBuffer([]))
            .toBe(false)
        expect(isArrayBuffer({}))
            .toBe(false)


        expect(isArrayBuffer(new ArrayBuffer(1)))
            .toBe(true)
    })
})