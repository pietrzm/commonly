import isSymbol from "./isSymbol"


describe(`Module "Type" -> Function "isSymbol"`, () => {
    it("should preform a check if a given value is a symbol.", () => {
        expect(isSymbol(undefined))
            .toBe(false)
        expect(isSymbol(null))
            .toBe(false)

        expect(isSymbol(0))
            .toBe(false)
        expect(isSymbol(true))
            .toBe(false)
        expect(isSymbol(""))
            .toBe(false)

        expect(isSymbol(Symbol()))
            .toBe(true)

        expect(isSymbol([]))
            .toBe(false)
        expect(isSymbol({}))
            .toBe(false)
    })
})