import indexOf from "./indexOf"


describe(`Module "List" -> Function "indexOf"`, () => {
    it(`should return an index in the list for a given value, if not found, return -1.`, () => {
        expect(indexOf(1, [ 1, 2, 3, 5 ]))
            .toEqual(0)

        expect(indexOf(5, [ 1, 2, 3, 5 ]))
            .toEqual(3)

        expect(indexOf(4, [ 1, 2, 3, 5 ]))
            .toEqual(-1)
    })
})