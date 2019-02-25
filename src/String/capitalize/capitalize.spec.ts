import capitalize from "./capitalize"



describe(`function capitalize(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(capitalize(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "the quick brown FOX jumps over the lazy DOG"

            expect(capitalize(string))
                .toEqual("The quick brown FOX jumps over the lazy DOG")
        })
    })
})
