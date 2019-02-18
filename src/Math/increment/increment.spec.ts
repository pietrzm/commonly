import increment from "Math/increment/increment"



describe(`function increment(number)`, () => {
    it(`should increment the number by one`, () => {
        const number = 1

        expect(increment(number))
            .toEqual(number + 1)
    })
})
