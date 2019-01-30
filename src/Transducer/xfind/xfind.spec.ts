import xfind   from "./xfind"

import compose  from "Function/compose/compose"
import reduced from "Function/reduced/reduced"
import isEven  from "Math/isEven/isEven"
import isOdd   from "Math/isOdd/isOdd"



describe(`function xfind(predicate, reducer)`, () => {
    context(`transducer's step function'`, () => {
        it(`should return an undefined`, () => {
            const subject = xfind(isEven, null)

            expect(subject(0, 7))
                .toEqual(undefined)
        })

        it(`should return an early reduced number 7`, () => {
            const subject = xfind(isOdd, null)

            expect(subject(0, 7))
                .toEqual(reduced(7))
        })
    })

    context(`transducer's composition`, () => {
        it(`should return an undefined`, () => {
            const subject =
                compose(
                    xfind(isEven),
                    xfind(isOdd)
                )(null)

            expect(subject(0, 7))
                .toEqual(undefined)
        })

        it(`should return an early reduced number 7`, () => {
            const subject =
                compose(
                    xfind(isOdd),
                    xfind(isEven)
                )(null)

            expect(subject(0, 7))
                .toEqual(reduced(7))
        })
    })
})
