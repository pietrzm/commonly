import decrement from "Math/decrement/decrement"



describe(`function decrement(number)`, () => {
    it(`should decrement the number by one`, () => {
        const number = 1

        expect(decrement(number))
            .toEqual(number - 1)
    })
})
