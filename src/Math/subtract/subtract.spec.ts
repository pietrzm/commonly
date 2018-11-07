import subtract from "./subtract";


describe(`Module "Math" -> Function "subtract"`, () => {
    it("should preform subtraction of two given numbers.", () => {
        expect(subtract(2, 2))
            .toBe(0)

        expect(subtract(25, 75))
            .toBe(-50)

        expect(subtract(75, 25))
            .toBe(50)
    })

    it("should be a curried function.", () => {
        expect(() => subtract(2)(2))
            .not.toThrow()
    })
})