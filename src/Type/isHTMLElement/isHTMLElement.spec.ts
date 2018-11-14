import isHTMLElement from "./isHTMLElement"


describe(`Module "Type" -> Function "isHTMLElement"`, () => {
    it("should preform a check if a given value is a HTMLElement.", () => {
        expect(isHTMLElement(undefined))
            .toBe(false)
        expect(isHTMLElement(null))
            .toBe(false)

        expect(isHTMLElement(0))
            .toBe(false)
        expect(isHTMLElement(true))
            .toBe(false)
        expect(isHTMLElement(""))
            .toBe(false)

        expect(isHTMLElement(Symbol()))
            .toBe(false)

        expect(isHTMLElement([]))
            .toBe(false)
        expect(isHTMLElement({}))
            .toBe(false)


        expect(isHTMLElement(document.createElement("div")))
            .toBe(true)
    })
})