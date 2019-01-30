import inRange from "./inRange"



describe(`function inRange([ lower, upper ], value)`, () => {
    context(`value is within lower and upper bounds`, () => {
        it(`should return true`, () => {
            const value = .5

            expect(inRange([ 0, 1 ], value))
                .toEqual(true)
        })
    })

    context(`value is below lower bound`, () => {
        it(`should return false`, () => {
            const value = -.25

            expect(inRange([ 0, 1 ], value))
                .toEqual(false)
        })
    })

    context(`value is above upper bound`, () => {
        it(`should return false`, () => {
            const value = 1.25

            expect(inRange([ 0, 1 ], value))
                .toEqual(false)
        })
    })
})
