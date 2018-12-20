import xfilter from "./xfilter"

import compose  from "Function/compose/compose"
import add     from "Math/add/add"
import isEven  from "Math/isEven/isEven"
import isOdd   from "Math/isOdd/isOdd"



describe(`function xfilter(predicate, reducer)`, () => {
	context(`transducer's step function'`, () => {
		it(`should return a valid result with isEven as predicate`, () => {
			const subject = xfilter(isEven, add)

			expect(subject(0, 7))
				.toEqual(0)
		})

		it(`should return a valid result with isOdd as predicate`, () => {
			const subject = xfilter(isOdd, add)

			expect(subject(0, 7))
				.toEqual(7)
		})
	})

	context(`transducer's composition`, () => {
		it(`should return a number 0`, () => {
			const subject =
				compose(
					xfilter(isEven),
					xfilter(isOdd)
				)(add)

			expect(subject(0, 7))
				.toEqual(0)
		})

		it(`should return a number 0`, () => {
			const subject =
				compose(
					xfilter(isOdd),
					xfilter(isEven)
				)(add)

			expect(subject(0, 7))
				.toEqual(0)
		})
	})
})