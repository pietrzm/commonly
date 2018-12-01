import isEmpty from "./isEmpty"



describe(`Module "List" -> Function "isEmpty"`, () => {
    it("should return a boolean whether the given list is empty.", () => {
        expect(isEmpty([]))
            .toEqual(true)

        expect(isEmpty([ 1 ]))
            .toEqual(false)

        expect(isEmpty([ 1, 2, 3, 5 ]))
            .toEqual(false)
    })
})