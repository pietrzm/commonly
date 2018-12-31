import push from "./push"



describe(`function pop(xs)`, () => {
	context(`xs is empty`, () => {
		it(`should return xs`, () => {
			const xs = []

			expect(push(0, xs))
				.toEqual([ 0 ])
		})

		it(`should mutate xs`, () => {
			const xs = []

			expect(push(0, xs))
				.toBe(xs)
		})
	})

	context(`xs is not empty`, () => {
		it(`should remove last item from xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(push(55, xs))
				.toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])
		})

		it(`should mutate xs`, () => {
			const xs = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(push(55, xs))
				.toBe(xs)
		})
	})
})