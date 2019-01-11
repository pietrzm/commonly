import flatten from "./flatten"



describe(`function flatten(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(flatten(xs))
				.toEqual([])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(flatten(xs))
				.not.toBe(xs)
		})
	})

	context(`xs is single level deep`, () => {
		it(`should flatten xs a single level deep`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(flatten(xs))
				.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(flatten(xs))
				.not.toBe(xs)
		})
	})

	context(`xs is two levels deep`, () => {
		it(`should flatten xs a single level deep`, () => {
			const xs = [ 0, 1, [ 1, 2, 3 ], 5, [ 8, 13 ], 21, 34 ]

			expect(flatten(xs))
				.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ 0, 1, [ 1, 2, 3 ], 5, [ 8, 13 ], 21, 34 ]

			expect(flatten(xs))
				.not.toBe(xs)
		})
	})

	context(`xs is three levels deep`, () => {
		it(`should flatten xs a single level deep`, () => {
			const xs = [ 0, [ 1, [ 1, 2, 3 ], 5, [ 8, 13 ], 21 ], 34 ]

			expect(flatten(xs))
				.toEqual([ 0, 1, [ 1, 2, 3 ], 5, [ 8, 13 ], 21, 34 ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ 0, [ 1, [ 1, 2, 3 ], 5, [ 8, 13 ], 21 ], 34 ]

			expect(flatten(xs))
				.not.toBe(xs)
		})
	})
})