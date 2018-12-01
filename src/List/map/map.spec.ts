import map from "./map"
import { multiply } from "Math"



describe(`Module "List" -> Function "map"`, () => {
    it("should return a list with mapped values.", () => {
        const listA = [ 1, 2, 3, 5 ],
            listB = map(multiply(2), listA)

        expect(listB)
            .not.toBe(listA)

        expect(listA)
            .toEqual([ 1, 2, 3, 5 ])

        expect(listB)
            .toEqual([ 2, 4, 6, 10 ])
    })
})