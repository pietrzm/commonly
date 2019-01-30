import isElement from "./isElement"



describe(`function isElement(x)`, () => {
    context(`x is an Element`, () => {
        it(`should return true`, () => {
            const subjectA = document.createElement("strong"),
                subjectB = document.createElement("circle")

            expect(isElement(subjectA))
                .toBe(true)
            expect(isElement(subjectB))
                .toBe(true)
        })
    })

    context(`x is undefined`, () => {
        it(`should return false`, () => {
            expect(isElement(undefined))
                .toBe(false)
        })
    })

    context(`x is null`, () => {
        it(`should return false`, () => {
            expect(isElement(null))
                .toBe(false)
        })
    })

    context(`x is anything`, () => {
        it(`should return false`, () => {
            expect(isElement(NaN))
                .toBe(false)
            expect(isElement(true))
                .toBe(false)
            expect(isElement(""))
                .toBe(false)

            expect(isElement({}))
                .toBe(false)
            expect(isElement([]))
                .toBe(false)
            expect(isElement(new Set()))
                .toBe(false)
            expect(isElement(new Map()))
                .toBe(false)
        })
    })
})
