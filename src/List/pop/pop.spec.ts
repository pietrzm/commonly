import pop from "./pop"



describe(`Module "List" -> Function "pop"`, () => {
    it("should remove an item at the end of a existing list.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = pop(listA)

        expect(listB)
            .toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3 ])

        expect(listB)
            .toEqual([ 1, 2, 3 ])
    })
})