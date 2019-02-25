import camelcase from "./camelcase"



describe(`function camelcase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(camelcase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(camelcase(string))
                .toEqual("theQuickBrownFOXJumpsOverTheLazyDOG")
        })
    })
})
