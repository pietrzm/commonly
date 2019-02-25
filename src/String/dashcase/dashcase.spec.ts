import dashcase from "./dashcase"



describe(`function dashcase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(dashcase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(dashcase(string))
                .toEqual("the-quick-brown-fox-jumps-over-the-lazy-dog")
        })
    })
})
