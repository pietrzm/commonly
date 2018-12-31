import filter from "./filter"
import isEven from "Math/isEven/isEven"
import isOdd from "Math/isOdd/isOdd"



describe(`function filter(mapper, xs: Array)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Array`, () => {
			const subject = []

			expect(filter(isEven, subject))
				.toEqual([])
			expect(filter(isOdd, subject))
				.toEqual([])
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a filtered Array`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(filter(isEven, subject))
				.toEqual([ 0, 2, 8, 34 ])
			expect(filter(isOdd, subject))
				.toEqual([ 1, 1, 3, 5, 13, 21 ])
		})
	})
})


describe(`function filter(mapper, xs: String)`, () => {
	context(`xs is empty`, () => {
		it(`should return a empty String`, () => {
			const subject = ""

			expect(filter(isEven, subject))
				.toEqual("")
			expect(filter(isOdd, subject))
				.toEqual("")
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a filtered String`, () => {
			const subject = "0112358"

			expect(filter(isEven, subject))
				.toEqual("028")
			expect(filter(isOdd, subject))
				.toEqual("1135")
		})
	})
})


describe(`function filter(mapper, xs: Set)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Set`, () => {
			const subject = new Set()

			expect(filter(isEven, subject))
				.toEqual(new Set())
			expect(filter(isOdd, subject))
				.toEqual(new Set())
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a filtered Set`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(filter(isEven, subject))
				.toEqual(new Set([ 0, 2, 8, 34 ]))
			expect(filter(isOdd, subject))
				.toEqual(new Set([ 1, 1, 3, 5, 13, 21 ]))
		})
	})
})


describe(`function filter(mapper, xs: Map)`, () => {
	context(`xs is empty`, () => {
		it(`should return an empty Set`, () => {
			const subject = new Map()

			expect(filter(([ k, x ]) => isEven(x), subject))
				.toEqual(new Map())
			expect(filter(([ k, x ]) => isOdd(x), subject))
				.toEqual(new Map())
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a filtered Map`, () => {
			const subject = new Map([
				[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
				[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
			])

			expect(filter(([ k, x ]) => isEven(x), subject))
				.toEqual(new Map([
					[ "A", 0 ], [ "D", 2 ],
					[ "G", 8 ], [ "J", 34 ]
				]))
			expect(filter(([ k, x ]) => isOdd(x), subject))
				.toEqual(new Map([
					[ "B", 1 ], [ "C", 1 ],  [ "E", 3 ],
					[ "F", 5 ], [ "H", 13 ], [ "I", 21 ]
				]))
		})
	})
})