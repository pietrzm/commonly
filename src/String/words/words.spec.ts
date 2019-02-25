import words from "String/words/words"



describe(`function words(string)`, () => {
    context(`string is empty`, () => {
        it(`should return an empty array`, () => {
            const string = ""
            expect(words(string))
                .toEqual([])
        })
    })

    context(`string is a regular sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "The quick brown FOX jumps over the lazy DOG"
            expect(words(string))
                .toEqual([ "The", "quick", "brown", "FOX", "jumps", "over", "the", "lazy", "DOG" ])
        })
    })

    context(`string is a camel case sentence`, () => {
        context(`string does not contains abbreviations`, () => {
            it(`should return an array containing words from string`, () => {
                const string = "theQuickBrownFoxJumpsOverTheLazyDog"
                expect(words(string))
                    .toEqual([ "the", "Quick", "Brown", "Fox", "Jumps", "Over", "The", "Lazy", "Dog" ])
            })
        })

        context(`string does contains abbreviations`, () => {
            it(`should return an array containing words from string`, () => {
                const string = "theQuickBrownFOXJumpsOverTheLazyDOG"
                expect(words(string))
                    .toEqual([ "the", "Quick", "Brown", "FOX", "Jumps", "Over", "The", "Lazy", "DOG" ])
            })
        })
    })

    context(`string is a pascal case sentence with abbreviations`, () => {
        context(`string does not contains abbreviations`, () => {
            it(`should return an array containing words from string`, () => {
                const string = "TheQuickBrownFoxJumpsOverTheLazyDog"
                expect(words(string))
                    .toEqual([ "The", "Quick", "Brown", "Fox", "Jumps", "Over", "The", "Lazy", "Dog" ])
            })
        })

        context(`string does contains abbreviations`, () => {
            it(`should return an array containing words from string`, () => {
                const string = "TheQuickBrownFOXJumpsOverTheLazyDOG"
                expect(words(string))
                    .toEqual([ "The", "Quick", "Brown", "FOX", "Jumps", "Over", "The", "Lazy", "DOG" ])
            })
        })
    })

    context(`string is a dash case sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "the-quick-brown-FOX-jumps-over-the-lazy-DOG"
            expect(words(string))
                .toEqual([ "the", "quick", "brown", "FOX", "jumps", "over", "the", "lazy", "DOG" ])
        })
    })

    context(`string is a train case sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "The-Quick-Brown-FOX-Jumps-Over-The-Lazy-DOG"
            expect(words(string))
                .toEqual([ "The", "Quick", "Brown", "FOX", "Jumps", "Over", "The", "Lazy", "DOG" ])
        })
    })

    context(`string is a snake case sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "the_quick_brown_FOX_jumps_over_the_lazy_DOG"
            expect(words(string))
                .toEqual([ "the", "quick", "brown", "FOX", "jumps", "over", "the", "lazy", "DOG" ])
        })
    })
})
