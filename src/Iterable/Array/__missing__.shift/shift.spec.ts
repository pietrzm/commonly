import shift from "./shift"



describe.skip(`function shift(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return xs`, () => {
			const xs = []

			expect(shift(xs))
				.toEqual([])
		})

		it(`should mutate xs`, () => {
			const xs = []

			expect(shift(xs))
				.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should remove last item from xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(shift(xs))
				.toEqual([ 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(shift(xs))
				.toBe(xs)
		})
	})
})