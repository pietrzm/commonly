import random from "Number/__missing__.random/random"



describe.skip(`function random([ lower, upper ], seed)`, () => {
	context(`lower and upper bounds are provided`, () => {
		it(`should always return the same value`, () => {
			const seed = 0

			for (let i = 0; i < 1e+2; i++) {
				expect(random([ 0, 1 ], seed))
					.toEqual(___MISSING_VALUE___)
			}
		})
	})

	context(`lower and upper bounds are not provided`, () => {
		it(`should always return the same value`, () => {
			const seed = 0

			for (let i = 0; i < 1e+2; i++) {
				expect(random(seed))
					.toEqual(___MISSING_VALUE___)
			}
		})
	})
})


describe.skip(`function random([ lower, upper ])`, () => {
	context(`lower and upper bounds are provided`, () => {
		it(`should always return a value greater or equal 0`, () => {
			for (let i = 0; i < 1e+2; i++) {
				expect(random([ 0, 1 ]) >= 0)
					.toEqual(true)
			}
		})

		it(`should always return a value lesser or equal 1`, () => {
			for (let i = 0; i < 1e+2; i++) {
				expect(random([ 0, 1 ]) <= 1)
					.toEqual(true)
			}
		})
	})
})