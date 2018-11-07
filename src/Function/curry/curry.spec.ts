import curry from "./curry"
import { __ } from "../index"


describe(`Module "Function" -> Function "curry"`, () => {
    const curried = curry(
        (a, b, c) =>
            a * b ** 2 * c
    )

    it("should curry an uncurried function.", () => {
        expect(() => curried(1)(2)(3))
            .not.toThrow()

        expect(() => curried(1, 2)(3))
            .not.toThrow()

        expect(() => curried(1)(2, 3))
            .not.toThrow()

        expect(() => curried(1, 2, 3))
            .not.toThrow()
    })

    it("should skip placeholder values.", () => {
        expect(() => curried(1)(__)(2)(3))
            .not.toThrow()

        expect(curried(1, 2, 3))
            .toBe(curried(1, __, 3)(2))
    })
})