import unshift from "./unshift"



describe(`function unshift(x, xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return xs`, () => {
			const xs = []

			expect(unshift(0, xs))
				.toEqual([ 0 ])
		})

		it(`should mutate xs`, () => {
			const xs = []

			expect(unshift(0, xs))
				.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should remove last item from xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(unshift(-1, xs))
				.toEqual([ -1, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(unshift(-1, xs))
				.toBe(xs)
		})
	})
})