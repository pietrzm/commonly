import includes from "./includes"


describe(`Module "List" -> Function "includes"`, () => {
    it(`should return a boolean value, true when value in the list was found, otherwise return false.`, () => {
        expect(includes(1, [ 1, 2, 3, 5 ]))
            .toEqual(true)

        expect(includes(5, [ 1, 2, 3, 5 ]))
            .toEqual(true)

        expect(includes(4, [ 1, 2, 3, 5 ]))
            .toEqual(false)
    })
})