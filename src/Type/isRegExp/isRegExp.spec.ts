import isRegExp from "./isRegExp"


describe(`Module "Type" -> Function "isRegExp"`, () => {
    it("should preform a check if a given value is a RegExp.", () => {
        expect(isRegExp(undefined))
            .toBe(false)
        expect(isRegExp(null))
            .toBe(false)

        expect(isRegExp(0))
            .toBe(false)
        expect(isRegExp(true))
            .toBe(false)
        expect(isRegExp(""))
            .toBe(false)

        expect(isRegExp(Symbol()))
            .toBe(false)

        expect(isRegExp([]))
            .toBe(false)
        expect(isRegExp({}))
            .toBe(false)


        expect(isRegExp(new RegExp("/(?:)/")))
            .toBe(true)

        expect(isRegExp(/(?:)/))
            .toBe(true)
    })
})