import xnth from "./xnth"

import compose  from "Function/compose/compose"
import seq      from "Iterable/seq/seq"
import isEven   from "Math/isEven/isEven"
import multiply from "Math/multiply/multiply"
import xfilter from "Transducer/xfilter/xfilter"
import xmap     from "Transducer/xmap/xmap"



describe(`function xnth(i)`, () => {
    context(`xnth is composed with other transducer`, () => {
        const pipeline = compose(
            xmap(multiply(2)),
            xfilter(isEven)
        )

        context(`xs is type of Array`, () => {
            context(`xs is empty`, () => {
                it(`should return an undefined`, () => {
                    const xs = []
                    expect(seq(compose(pipeline, xnth(3)), xs))
                        .toEqual(undefined)
                })
            })

            context(`xs is not empty`, () => {
                it(`should return the n nth element`, () => {
                    const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
                    expect(seq(compose(pipeline, xnth(3)), xs))
                        .toEqual(4)
                })
            })
        })
    })
})
