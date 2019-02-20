import xmap from "./xmap"

import compose  from "Function/compose/compose"
import seq      from "Iterable/seq/seq"
import add      from "Math/add/add"
import isEven   from "Math/isEven/isEven"
import multiply from "Math/multiply/multiply"
import xfilter  from "Transducer/xfilter/xfilter"



describe(`function xmap(mapper)`, () => {
    context(`xmap is composed with other transducer`, () => {
        const pipeline = compose(
            xmap(multiply(2)),
            xfilter(isEven)
        )

        context(`xs is type of Array`, () => {
            context(`xs is empty`, () => {
                it(`should return an empty xs`, () => {
                    const xs = []
                    expect(seq(compose(pipeline, xmap(add(1))), xs))
                        .toEqual([])
                })
            })

            context(`xs is not empty`, () => {
                it(`should return a mapped xs`, () => {
                    const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
                    expect(seq(compose(pipeline, xmap(add(1))), xs))
                        .toEqual([ 1, 3, 3, 5, 7, 11, 17, 27, 43, 69 ])
                })
            })
        })
    })
})
