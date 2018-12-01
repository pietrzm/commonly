import find from "./find"
import { isEven, isOdd } from "Math"



describe(`Module "List" -> Function "find"`, () => {
    it(`should return the first value from the list which passes the predicate, otherwise return undefined.`, () => {
        expect(find(isEven, [ 1, 3, 5 ]))
            .toEqual(undefined)

        expect(find(isOdd, [ 1, 3, 5 ]))
            .toEqual(1)


        expect(find(isEven, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(2)

        expect(find(isOdd, [ 1, 2, 3, 4, 4, 6 ]))
            .toEqual(1)


        expect(find(isEven, [ 2, 4, 6 ]))
            .toEqual(2)

        expect(find(isOdd, [ 2, 4, 6 ]))
            .toEqual(undefined)
    })
})