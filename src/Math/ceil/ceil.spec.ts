import ceil from "Math/ceil/ceil"



describe(`function ceil(number, precision)`, () => {
    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(ceil(number))
                .toEqual(1)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(ceil(number, 1))
                .toEqual(.4)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(ceil(number, 2))
                .toEqual(.34)
        })
    })
})
