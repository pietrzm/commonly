import drop from "./drop"



describe(`function drop(n, xs: Array)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(drop(1, xs))
				.toEqual([])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(drop(1, xs))
				.not.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should drop first three elements from an Array`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(drop(3, xs))
				.toEqual([ 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(drop(3, xs))
				.not.toBe(xs)
		})
	})
})