import round from "Math/round/round"



describe(`function ceil(number, precision)`, () => {
    context(`precision is not defined`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .333

            expect(round(number))
                .toEqual(0)
        })
    })

    context(`precision is set to 1`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .345

            expect(round(number, 1))
                .toEqual(.3)
        })
    })

    context(`precision is set to 2`, () => {
        it(`should round the number up to a precision`, () => {
            const number = .345

            expect(round(number, 2))
                .toEqual(.35)
        })
    })
})
