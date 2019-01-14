import includes from "./includes"



describe(`function includes(x, xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return false`, () => {
			const xs = []

			expect(includes(7, xs))
				.toEqual(false)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return true`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(includes(13, xs))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(includes(7, xs))
				.toEqual(false)
		})
	})
})