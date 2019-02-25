import snakecase from "./snakecase"



describe(`function snakecase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(snakecase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(snakecase(string))
                .toEqual("the_quick_brown_fox_jumps_over_the_lazy_dog")
        })
    })
})
