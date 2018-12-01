import prepend from "./prepend"



describe(`Module "List" -> Function "prepend"`, () => {
    it("should create a new list with item added at the beginning of that list.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = prepend(0, listA)

        expect(listB)
            .not.toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3, 5 ])

        expect(listB)
            .toEqual([ 0, 1, 2, 3, 5 ])
    })
})