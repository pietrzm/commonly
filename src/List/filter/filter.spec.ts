import filter from "./filter"
import { isEven } from "../../Math"


describe(`Module "List" -> Function "filter"`, () => {
    it("should return a list with mapped values.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = filter(isEven, listA)

        expect(listB)
            .not.toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3, 5 ])

        expect(listB)
            .toEqual([ 2 ])
    })
})