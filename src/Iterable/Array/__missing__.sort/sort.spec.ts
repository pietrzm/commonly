import sort  from "./sort"



describe.skip(`function sort(comparator, xs)`, () => {
	const comparator = (a, b) => a - b

	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(sort(comparator, xs))
				.toEqual([])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(sort(comparator, xs))
				.not.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a sorted Array`, () => {
			const xs = [ 1, 32, 2, 0, 1, 3, 13, 21, 5, 8 ]

			expect(sort(comparator, xs))
				.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(sort(comparator, xs))
				.not.toBe(xs)
		})
	})
})