import xtake   from "Transducer/xtake/xtake"

import compose from "Function/compose/compose"
import reduced from "Function/reduced/reduced"
import add     from "Math/add/add"



describe(`function xtake(n, reducer)`, () => {
    context(`transducer's step function'`, () => {
        it(`should return an early reduced number 0`, () => {
            const subject = xtake(0, add)

            expect(subject(0, 7))
                .toEqual(reduced(0))
        })

        it(`should return a number 7`, () => {
            const subject = xtake(1, add)

            expect(subject(0, 7))
                .toEqual(7)
        })

        it(`should return an early reduced number 7`, () => {
            const subject = xtake(1, add)

            expect(subject(subject(0, 7), 5))
                .toEqual(reduced(7))
        })
    })

    context(`transducer's composition'`, () => {
        it(`should return a number 7`, () => {
            const subject = compose(
                xtake(1),
                xtake(2),
                xtake(3)
            )(add)

            expect(subject(0, 7))
                .toEqual(7)
        })
    })
})
