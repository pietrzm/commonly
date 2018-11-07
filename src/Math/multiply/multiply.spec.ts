import multiply from "./multiply";


describe(`Module "Math" -> Function "multiply"`, () => {
    it("should preform addition of two numbers.", () => {
        expect(multiply(2, 2))
            .toBe(4)

        expect(multiply(25, 75))
            .toBe(1875)

        expect(multiply(75, 25))
            .toBe(1875)
    })

    it("should be a curried function.", () => {
        expect(() => multiply(2)(2))
            .not.toThrow()
    })
})