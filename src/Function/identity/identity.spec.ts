import identity from "Function/identity/identity"



describe(`function identity(x)`, () => {
    context(`no x`, () => {
        it(`should return undefined`, () => {
            expect((identity as any)())
                .toBe(undefined)
        })
    })

    context(`x is undefined`, () => {
        it(`should return undefined`, () => {
            expect(identity(undefined))
                .toBe(undefined)
        })
    })


    context(`x is null`, () => {
        it(`should return null`, () => {
            expect(identity(null))
                .toBe(null)
        })
    })

    context(`x is anything`, () => {
        it(`should return passed in x`, () => {
            const object = {},
                array = [],
                symbol = Symbol()

            expect(identity(object))
                .toBe(object)
            expect(identity(array))
                .toBe(array)
            expect(identity(symbol))
                .toBe(symbol)
        })
    })
})
