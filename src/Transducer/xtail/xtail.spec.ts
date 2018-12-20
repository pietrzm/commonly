import xtail from "Transducer/xtail/xtail"

import compose from "Function/compose/compose"
import add     from "Math/add/add"



describe(`function xtail(reducer)`, () => {
	context(`transducer's step function'`, () => {
		it(`should return a number 0`, () => {
			const subject = xtail(add)

			expect(subject(0, 7))
				.toEqual(0)
		})

		it(`should return a number 7`, () => {
			const subject = xtail(add)

			expect(subject(subject(0, 5), 7))
				.toEqual(7)
		})
	})

	context(`transducer's composition'`, () => {
		it(`should return a number 7`, () => {
			const subject = compose(
				xtail,
				xtail,
				xtail
			)(add)

			expect(subject(0, 7))
				.toEqual(0)
		})
	})
})