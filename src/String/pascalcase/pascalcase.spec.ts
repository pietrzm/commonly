import pascalcase from "./pascalcase"



describe(`function pascalcase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(pascalcase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(pascalcase(string))
                .toEqual("TheQuickBrownFOXJumpsOverTheLazyDOG")
        })
    })
})
