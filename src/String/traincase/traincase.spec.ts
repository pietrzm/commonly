import traincase from "./traincase"



describe(`function traincase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(traincase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(traincase(string))
                .toEqual("The-Quick-Brown-FOX-Jumps-Over-The-Lazy-DOG")
        })
    })
})
