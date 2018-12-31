import seed from "Iterable/seed/seed"



describe(`function seed(xs: Array)`, () => {
	it(`should return an empty Array`, () => {
		expect(seed([ 0, 1, 1, 2, 3 ]))
			.toEqual([])
	})
})


describe(`function seed(xs: String)`, () => {
	it(`should return an empty String`, () => {
		expect(seed("01123"))
			.toEqual("")
	})
})


describe(`function seed(xs: Set)`, () => {
	it(`should return an empty Set`, () => {
		expect(seed(new Set([ 0, 1, 1, 2, 3 ])))
			.toEqual(new Set())
	})
})


describe(`function seed(xs: Map)`, () => {
	it(`should return an empty Map`, () => {
		expect(seed(new Map([ [ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ] ])))
			.toEqual(new Map())
	})
})