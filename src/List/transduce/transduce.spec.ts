import transduce from "./transduce"
import { push } from "../../List"
import { compose } from "../../Function"
import { add } from "../../Math"


describe(`Module "List" -> Function "transduce"`, () => {
    it(``, () => {
        const mapTransducer = xf => reducer => (accumulator, fruit) => reducer(accumulator, xf(fruit)),
            arrayReducer = (xs, x) => push(x, xs)

        expect(transduce(compose(mapTransducer(add("-")), mapTransducer(add(">"))), arrayReducer, [], [ "Apple", "Banana", "Orange" ]))
            .toEqual([ ">-Apple", ">-Banana", ">-Orange" ])
    })
})