import add from "./add";



describe(`Module "Math" -> Function "add"`, () => {
    it("should preform addition of two given numbers.", () => {
        expect(add(2, 2))
            .toBe(4)

        expect(add(25, 75))
            .toBe(100)

        expect(add(75, 25))
            .toBe(100)
    })

    it("should be a curried function.", () => {
        expect(() => add(2)(2))
            .not.toThrow()
    })
})