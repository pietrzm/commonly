import isOdd from "./isOdd";


describe(`Module "Math" -> Function "isOdd"`, () => {
    it("should preform a check whether a given value is an even number.", () => {
        expect(isOdd(2))
            .toBe(false)
        expect(isOdd(4))
            .toBe(false)
        expect(isOdd(16))
            .toBe(false)

        expect(isOdd(3))
            .toBe(true)
        expect(isOdd(9))
            .toBe(true)
        expect(isOdd(81))
            .toBe(true)
    })

})