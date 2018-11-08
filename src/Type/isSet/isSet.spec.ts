import isSet from "./isSet"


describe(`Module "Type" -> Function "isSet"`, () => {
    it("should preform a check if a given value is a Set.", () => {
        expect(isSet(undefined))
            .toBe(false)
        expect(isSet(null))
            .toBe(false)

        expect(isSet(0))
            .toBe(false)
        expect(isSet(true))
            .toBe(false)
        expect(isSet(""))
            .toBe(false)

        expect(isSet(Symbol()))
            .toBe(false)

        expect(isSet([]))
            .toBe(false)
        expect(isSet({}))
            .toBe(false)


        expect(isSet(new Set()))
            .toBe(true)
    })
})