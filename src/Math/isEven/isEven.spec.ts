import isEven from "./isEven";


describe(`Module "Math" -> Function "isEven"`, () => {
    it("should preform a check whether a given value is an even number.", () => {
        expect(isEven(2))
            .toBe(true)
        expect(isEven(4))
            .toBe(true)
        expect(isEven(16))
            .toBe(true)

        expect(isEven(3))
            .toBe(false)
        expect(isEven(9))
            .toBe(false)
        expect(isEven(81))
            .toBe(false)
    })

})