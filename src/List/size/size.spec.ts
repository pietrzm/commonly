import size from "./size"



describe(`Module "List" -> Function "size"`, () => {
    it("should return a size of a given list.", () => {
        expect(size([]))
            .toEqual(0)

        expect(size([ 1 ]))
            .toEqual(1)

        expect(size([ 1, 2, 3, 5 ]))
            .toEqual(4)
    })
})