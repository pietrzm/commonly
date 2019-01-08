import reverse from "./reverse"



describe.skip(`function reverse(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(reverse(xs))
				.toEqual([])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(reverse(xs))
				.not.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a reversed Array`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(reverse(xs))
				.toEqual([ 34, 21, 13, 8, 5, 3, 2, 1, 1, 0 ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(reverse(xs))
				.not.toBe(xs)
		})
	})
})