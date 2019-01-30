import xslice from "Transducer/xslice/xslice"

import compose from "Function/compose/compose"
import reduced from "Function/reduced/reduced"
import add     from "Math/add/add"



describe(`function xslice(i, j, reducer)`, () => {
    context(`transducer's step function'`, () => {
        it(`should return a number 7`, () => {
            const subject = xslice(0, 1, add)

            expect(subject(0, 7))
                .toEqual(7)
        })

        it(`should return an early reduced number 7`, () => {
            const subject = xslice(0, 1, add)

            expect(subject(subject(0, 7), 5))
                .toEqual(reduced(7))
        })
    })

    context(`transducer's composition'`, () => {
        it(`should return a number 7`, () => {
            const subject = compose(
                xslice(0, 2),
                xslice(0, 1)
            )(add)

            expect(subject(0, 7))
                .toEqual(7)
        })
    })
})
