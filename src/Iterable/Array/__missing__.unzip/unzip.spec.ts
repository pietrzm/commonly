import unzip from "./unzip"



describe.skip(`function unzip(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const xs = []

			expect(unzip(xs))
				.toEqual([])
		})

		it(`should not mutate xs`, () => {
			const xs = []

			expect(unzip(xs))
				.not.toBe(xs)
		})
	})

	context(`xs has 2 elements, each is an Array with 5 elements`, () => {
		it(`should return a zipped Array`, () => {
			const xs = [ [ 0, 1, 3, 8, 21 ], [ 1, 2, 5, 13, 34 ] ]

			expect(unzip(xs))
				.toEqual([ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ],  [ 8, 13 ], [ 21, 34 ] ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ [ 0, 1, 3, 8, 21 ], [ 1, 2, 5, 13, 34 ] ]

			expect(unzip(xs))
				.not.toBe(xs)
		})
	})

	context(`xs has 5 elements, each is an Array with 2 elements`, () => {
		it(`should return a zipped Array`, () => {
			const xs = [ [ 0, 5 ], [ 1, 8 ], [ 1, 13 ],  [ 2, 21 ], [ 3, 34 ] ]

			expect(unzip(xs))
				.toEqual([ [ 0, 1, 1, 2, 3 ], [ 5, 8, 13, 21, 34 ] ])
		})

		it(`should not mutate xs`, () => {
			const xs = [ [ 0, 5 ], [ 1, 8 ], [ 1, 13 ],  [ 2, 21 ], [ 3, 34 ] ]

			expect(unzip(xs))
				.not.toBe(xs)
		})
	})
})