import nand from "./nand";


describe(`Module "Logic" -> Function "nand"`, () => {
    it("should preform a logical negation with a logical conjunction of two given boolean values.", () => {
        expect(nand(false, false))
            .toBe(true)

        expect(nand(false, true))
            .toBe(true)

        expect(nand(true, false))
            .toBe(true)

        expect(nand(true, true))
            .toBe(false)
    })

    it("should be a curried function.", () => {
        expect(() => nand(false)(false))
            .not.toThrow()
    })
})