import uppercase from "./uppercase"



describe(`function uppercase(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty string`, () => {
            const string = ""

            expect(uppercase(string))
                .toEqual("")
        })
    })

    context(`string is not empty`, () => {
        it(`should return an upper cased string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"

            expect(uppercase(string))
                .toEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")
        })
    })
})
