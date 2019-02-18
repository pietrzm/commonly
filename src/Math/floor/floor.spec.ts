import floor from "Math/floor/floor"



describe(`function floor(number, precision)`, () => {
    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(floor(number))
                .toEqual(0)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(floor(number, 1))
                .toEqual(.3)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(floor(number, 2))
                .toEqual(.33)
        })
    })
})
