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
            const string = "The quick brown fox jumps over the lazy dog"
            expect(words(string))
                .toEqual([ "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" ])
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
                const string = "theQUICKBrownFoxJumpsOverTheLAZYDog"
                expect(words(string))
                    .toEqual([ "the", "QUICK", "Brown", "Fox", "Jumps", "Over", "The", "LAZY", "Dog" ])
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
                const string = "TheQUICKBrownFoxJumpsOverTheLAZYDog"
                expect(words(string))
                    .toEqual([ "The", "QUICK", "Brown", "Fox", "Jumps", "Over", "The", "LAZY", "Dog" ])
            })
        })
    })

    context(`string is a dash case sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "the-quick-brown-fox-jumps-over-the-lazy-dog"
            expect(words(string))
                .toEqual([ "the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" ])
        })
    })

    context(`string is a snake case sentence`, () => {
        it(`should return an array containing words from string`, () => {
            const string = "the_quick_brown_fox_jumps_over_the_lazy_dog"
            expect(words(string))
                .toEqual([ "the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" ])
        })
    })
})
