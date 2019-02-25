import constantcase from "./constantcase"



describe(`function constantcase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(constantcase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(constantcase(string))
                .toEqual("THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG")
        })
    })
})
