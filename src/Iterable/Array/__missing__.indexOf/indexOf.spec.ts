import indexOf from "./indexOf"



describe(`function indexOf(x, xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return -1`, () => {
			const xs = []

			expect(indexOf(7, xs))
				.toEqual(-1)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return 4`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(indexOf(13, xs))
				.toEqual(7)
		})

		it(`should return -1`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(indexOf(7, xs))
				.toEqual(-1)
		})
	})
})