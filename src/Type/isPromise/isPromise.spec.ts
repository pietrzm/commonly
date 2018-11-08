import isPromise from "./isPromise"


describe(`Module "Type" -> Function "isPromise"`, () => {
    it("should preform a check if a given value is a Promise.", () => {
        expect(isPromise(undefined))
            .toBe(false)
        expect(isPromise(null))
            .toBe(false)

        expect(isPromise(0))
            .toBe(false)
        expect(isPromise(true))
            .toBe(false)
        expect(isPromise(""))
            .toBe(false)

        expect(isPromise(Symbol()))
            .toBe(false)

        expect(isPromise([]))
            .toBe(false)
        expect(isPromise({}))
            .toBe(false)

        expect(isPromise(Promise.resolve(null)))
            .toBe(true)
    })
})