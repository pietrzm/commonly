import push from "./push"



describe(`Module "List" -> Function "push"`, () => {
    it("should add an item at the end of a existing list.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = push(8, listA)

        expect(listB)
            .toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3, 5, 8 ])

        expect(listB)
            .toEqual([ 1, 2, 3, 5, 8 ])
    })
})