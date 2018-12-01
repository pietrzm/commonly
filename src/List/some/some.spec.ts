import some from "./some"
import { isEven, isOdd } from "Math"



describe(`Module "List" -> Function "some"`, () => {
    it(`should return a boolean value equal to true, only when *any* of values in the list pass the predicate, otherwise false.`, () => {
        expect(some(isEven, [ 1, 3, 5 ]))
            .toEqual(false)

        expect(some(isOdd, [ 1, 3, 5 ]))
            .toEqual(true)


        expect(some(isEven, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(true)

        expect(some(isOdd, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(true)


        expect(some(isEven, [ 2, 4, 6 ]))
            .toEqual(true)

        expect(some(isOdd, [ 2, 4, 6 ]))
            .toEqual(false)
    })
})