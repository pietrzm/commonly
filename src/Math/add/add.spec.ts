import add from "./add";



describe(`function add(augend, addend)`, () => {
    context(`augend and addend are numbers`, () => {
        it(`should return a result of an addition of augend and addend`, () => {
            expect(add(2, 2))
                .toBe(4)
            expect(add(25, 75))
                .toBe(100)
            expect(add(75, 25))
                .toBe(100)
        })
    })

    context(`augend or addend is a string`, () => {
        it(`should return a result of an addition of augend and addend`, () => {
            expect(add("2", "2"))
                .toBe("22")
            expect(add(25, "75"))
                .toBe("2575")
            expect(add("75", 25))
                .toBe("7525")
        })
    })
})