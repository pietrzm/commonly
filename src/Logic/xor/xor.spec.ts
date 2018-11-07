import xor from "./xor";


describe(`Module "Logic" -> Function "xor"`, () => {
    it("should preform an exclusive logical disjunction of two given boolean values.", () => {
        expect(xor(false, false))
            .toBe(true)

        expect(xor(false, true))
            .toBe(true)

        expect(xor(true, false))
            .toBe(true)

        expect(xor(true, true))
            .toBe(false)
    })

    it("should be a curried function.", () => {
        expect(() => xor(false)(false))
            .not.toThrow()
    })
})