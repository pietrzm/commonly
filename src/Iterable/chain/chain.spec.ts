import chain from "./chain"

import identity from "Function/identity/identity"



describe(`function chain(mapper, xs: Array)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(chain(x => [ x, x ], xs))
				.toEqual([])
		})
	})

	context(`xs is not empty`, () => {
		context(`mapper return an Array`, () => {
			it(`should return a mapped flattened Array`, () => {
				const xs = [ 0, 1, 3, 8, 21 ]

				expect(chain(x => [ x, x ], xs))
					.toEqual([ 0, 0, 1, 1, 3, 3, 8, 8, 21, 21 ])
			})
		})

		context(`mapper return a single value`, () => {
			it(`should return a mapped Array`, () => {
				const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

				expect(chain(identity, xs))
					.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
			})
		})
	})
})