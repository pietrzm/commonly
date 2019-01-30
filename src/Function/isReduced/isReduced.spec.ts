import isReduced from "Function/isReduced/isReduced"
import reduced from "Function/reduced/reduced"



describe(`function isReduced(x)`, () => {
    context(`x is reduced`, () => {
        it(`should return true`, () => {
            const subject = reduced(Symbol())

            expect(isReduced(subject))
                .toBe(true)
        })
    })

    context(`x is not reduced`, () => {
        it(`should return false`, () => {
            const subject = Symbol()

            expect(isReduced(subject))
                .toBe(false)
        })
    })
})
