import pop from "./pop"



describe(`function pop(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return xs`, () => {
			const xs = []

			expect(pop(xs))
				.toEqual([])
		})

		it(`should mutate xs`, () => {
			const xs = []

			expect(pop(xs))
				.toBe([])
		})
	})

	context(`xs is not empty`, () => {
		it(`should remove last item from xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(pop(xs))
				.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21 ])
		})

		it(`should mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(pop(xs))
				.toBe(xs)
		})
	})
})