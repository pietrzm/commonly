import clamp from "Number/__missing__.clamp/clamp"



describe.skip(`function clamp([ lower, upper ], value)`, () => {
	context(`value is within lower and upper bounds`, () => {
		it(`should return the value`, () => {
			const value = .5

			expect(clamp([ 0, 1 ], value))
				.toEqual(.5)
		})
	})

	context(`value is below lower bound`, () => {
		it(`should return the lower bound`, () => {
			const value = -.25

			expect(clamp([ 0, 1 ], value))
				.toEqual(0)
		})
	})

	context(`value is above upper bound`, () => {
		it(`should return the upper bound`, () => {
			const value = 1.25

			expect(clamp([ 0, 1 ], value))
				.toEqual(1)
		})
	})
})