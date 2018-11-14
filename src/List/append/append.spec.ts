import append from "./append"


describe(`Module "List" -> Function "append"`, () => {
    it("should create a new list with item added at the end of that list.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = append(8, listA)

        expect(listB)
            .not.toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3, 5 ])

        expect(listB)
            .toEqual([ 1, 2, 3, 5, 8 ])
    })
})