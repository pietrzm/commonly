import push from "./push"



describe(`function push(x, xs: Array)`, () => {
	context(`x is undefined`, () => {
		it(`should add a x at the end of xs`, () => {
			expect(push(undefined, [ 0, 1, 1, 2, 3 ]))
				.toEqual([ 0, 1, 1, 2, 3, undefined ])
		})
	})

	context(`x is null`, () => {
		it(`should add a x at the end of xs`, () => {
			expect(push(null, [ 0, 1, 1, 2, 3 ]))
				.toEqual([ 0, 1, 1, 2, 3, null ])
		})
	})

	context(`x is anything`, () => {
		it(`should add a x at the end of xs`, () => {
			expect(push(5, [ 0, 1, 1, 2, 3 ]))
				.toEqual([ 0, 1, 1, 2, 3, 5 ])

			expect(push([ 5 ], [ 0, 1, 1, 2, 3 ]))
				.toEqual([ 0, 1, 1, 2, 3, [ 5 ] ])
		})
	})

	it(`should mutate xs`, () => {
		const xs = [ 0, 1, 1, 2, 3 ]

		expect(push(NaN, xs))
			.toBe(xs)
		expect(xs)
			.toEqual([ 0, 1, 1, 2, 3, NaN ])
	})
})