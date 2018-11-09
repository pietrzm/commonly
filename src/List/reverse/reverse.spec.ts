import reverse from "./reverse"


describe(`Module "List" -> Function "reverse"`, () => {
    it(`should return a reversed list.`, () => {
        expect(reverse([ 1, 2, 3, 5 ]))
            .toEqual([ 5, 3, 2, 1 ])
    })
})