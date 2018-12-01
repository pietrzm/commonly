import isMap from "./isMap"



describe(`Module "Type" -> Function "isMap"`, () => {
    it("should preform a check if a given value is a Set.", () => {
        expect(isMap(undefined))
            .toBe(false)
        expect(isMap(null))
            .toBe(false)

        expect(isMap(0))
            .toBe(false)
        expect(isMap(true))
            .toBe(false)
        expect(isMap(""))
            .toBe(false)

        expect(isMap(Symbol()))
            .toBe(false)

        expect(isMap([]))
            .toBe(false)
        expect(isMap({}))
            .toBe(false)


        expect(isMap(new Map()))
            .toBe(true)
    })
})