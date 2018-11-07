import xnor from "./xnor";


describe(`Module "Logic" -> Function "xnor"`, () => {
    it("should preform a negated exclusive logical disjunction of two given boolean values.", () => {
        expect(xnor(false, false))
            .toBe(true)

        expect(xnor(false, true))
            .toBe(false)

        expect(xnor(true, false))
            .toBe(false)

        expect(xnor(true, true))
            .toBe(true)
    })

    it("should be a curried function.", () => {
        expect(() => xnor(false)(false))
            .not.toThrow()
    })
})