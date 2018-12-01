import isElement from "./isElement"



describe(`Module "Type" -> Function "isElement"`, () => {
    it("should preform a check if a given value is an Element.", () => {
        expect(isElement(undefined))
            .toBe(false)
        expect(isElement(null))
            .toBe(false)

        expect(isElement(0))
            .toBe(false)
        expect(isElement(true))
            .toBe(false)
        expect(isElement(""))
            .toBe(false)

        expect(isElement(Symbol()))
            .toBe(false)

        expect(isElement([]))
            .toBe(false)
        expect(isElement({}))
            .toBe(false)


        expect(isElement(document.createElement("div")))
            .toBe(true)
    })
})