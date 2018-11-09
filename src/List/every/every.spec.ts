import every from "./every"
import { isEven, isOdd } from "../../Math"


describe(`Module "List" -> Function "every"`, () => {
    it(`should return a boolean value equal to true, only when *all* of values in the list pass the predicate, otherwise false.`, () => {
        expect(every(isEven, [ 1, 3, 5 ]))
            .toEqual(false)

        expect(every(isOdd, [ 1, 3, 5 ]))
            .toEqual(true)


        expect(every(isEven, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(false)

        expect(every(isOdd, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(false)


        expect(every(isEven, [ 2, 4, 6 ]))
            .toEqual(true)

        expect(every(isOdd, [ 2, 4, 6 ]))
            .toEqual(false)
    })
})