import reduce from "./reduce"
import { add, multiply } from "../../Math"


describe(`Module "List" -> Function "reduce"`, () => {

    describe(`-> Array`, () => {
        const list = [ 1, 2, 3, 5 ]

        it("should sum the numbers.", () => {
            expect(reduce(add, 1, list))
                .toEqual(12)
        })

        it("should multiply the numbers.", () => {
            expect(reduce(multiply, 1, list))
                .toEqual(30)
        })
    })

    describe(`-> String`, () => {
        const list = "1235"

        it("should sum the numbers.", () => {
            expect(reduce(add, "1", list))
                .toEqual("11235")
        })

        it("should multiply the numbers.", () => {
            expect(reduce(multiply, "1", list))
                .toEqual(30)
        })
    })

    describe(`-> Set`, () => {
        const list = new Set()
            .add(1)
            .add(2)
            .add(3)
            .add(5)

        it("should sum the numbers.", () => {
            expect(reduce(add, 1, list))
                .toEqual(12)
        })

        it("should multiply the numbers.", () => {
            expect(reduce(multiply, 1, list))
                .toEqual(30)
        })
    })

    describe(`-> Map`, () => {
        const list = new Map()
            .set("a", 1)
            .set("b", 2)
            .set("c", 3)
            .set("d", 5)

        it("should sum the numbers.", () => {
            expect(reduce(([, x ], [, y ]) => [, add(x, y) ], [, 1 ], list))
                .toEqual([, 12 ])
        })

        it("should multiply the numbers.", () => {
            expect(reduce(([, x ], [, y ]) => [, multiply(x, y) ], [, 1 ], list))
                .toEqual([, 30 ])
        })
    })

})