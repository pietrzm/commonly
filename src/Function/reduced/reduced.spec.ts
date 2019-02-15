import reduced from "Function/reduced/reduced"
import Reduced from "Protocol/Reduced"



describe(`function reduced(x)`, () => {
    context(`x is undefined`, () => {
        it(`should return true`, () => {
            const subject = undefined

            expect(reduced(subject))
                .toEqual({ [ Reduced.reduced ]: true, value: subject })
        })
    })

    context(`x is null`, () => {
        it(`should return true`, () => {
            const subject = null

            expect(reduced(subject))
                .toEqual({ [ Reduced.reduced ]: true, value: subject })
        })
    })

    context(`x is anything`, () => {
        it(`should return true`, () => {
            const object = {},
                array = [],
                symbol = Symbol()

            expect(reduced(object))
                .toEqual({ [ Reduced.reduced ]: true, value: object })
            expect(reduced(array))
                .toEqual({ [ Reduced.reduced ]: true, value: array })
            expect(reduced(symbol))
                .toEqual({ [ Reduced.reduced ]: true, value: symbol })
        })
    })
})
