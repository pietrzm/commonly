import filter from "./filter"
import { isEven, isOdd } from "Math"



describe(`function filter(mapper, xs: Array)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return an empty Array`, () => {
			const subject = []

			expect(filter(isEven, subject))
				.toEqual([])
			expect(filter(isOdd, subject))
				.toEqual([])
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return an Array, with every value "x" which passes a given predicate`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(filter(isEven, subject))
				.toEqual([ 0, 2, 8, 34 ])
			expect(filter(isOdd, subject))
				.toEqual([ 1, 1, 3, 5, 13, 21 ])
		})
	})

	context(`case: in === out`, () => {
		it(`should return a new Array`, () => {
			const subjectA = [],
				subjectB = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(filter(() => false, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => false, subjectB))
				.not.toBe(subjectB)

			expect(filter(() => true, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => true, subjectB))
				.not.toBe(subjectB)

			expect(filter(isEven, subjectA))
				.not.toBe(subjectA)
            expect(filter(isEven, subjectB))
	            .not.toBe(subjectB)

			expect(filter(isOdd, subjectA))
				.not.toBe(subjectA)
			expect(filter(isOdd, subjectB))
				.not.toBe(subjectB)
		})
	})
})


describe(`function filter(mapper, xs: String)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return a empty String`, () => {
			const subject = ""

			expect(filter(isEven, subject))
				.toEqual("")
			expect(filter(isOdd, subject))
				.toEqual("")
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return a String, with every value "x" which passes a given predicate`, () => {
			const subject = "0112358"

			expect(filter(isEven, subject))
				.toEqual("028")
			expect(filter(isOdd, subject))
				.toEqual("1135")
		})
	})

	context(`case: in === out`, () => {
		it(`should return a new String`, () => {
			const subject = "0112358"

			expect(filter(() => false, subject))
				.not.toBe(subject)

			expect(filter(isEven, subject))
				.not.toBe(subject)
			expect(filter(isOdd, subject))
				.not.toBe(subject)
		})

		it(`should return the same String`, () => {
			const subjectA = "",
				subjectB = "0112358"

			expect(filter(() => false, subjectA))
				.toBe(subjectA)
			expect(filter(() => true, subjectA))
				.toBe(subjectA)
			expect(filter(() => true, subjectB))
				.toBe(subjectB)

			expect(filter(isEven, subjectA))
				.toBe(subjectA)
			expect(filter(isOdd, subjectA))
				.toBe(subjectA)
		})
	})
})


describe(`function filter(mapper, xs: Set)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return an empty Set`, () => {
			const subject = new Set()

			expect(filter(isEven, subject))
				.toEqual(new Set())
			expect(filter(isOdd, subject))
				.toEqual(new Set())
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return a String, with every value "x" which passes a given predicate`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(filter(isEven, subject))
				.toEqual(new Set([ 0, 2, 8, 34 ]))
			expect(filter(isOdd, subject))
				.toEqual(new Set([ 1, 1, 3, 5, 13, 21 ]))
		})
	})

	context(`case: in === out`, () => {
		it(`should return a new Set`, () => {
			const subjectA = new Set(),
				subjectB = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(filter(() => false, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => false, subjectB))
				.not.toBe(subjectB)

			expect(filter(() => true, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => true, subjectB))
				.not.toBe(subjectB)

			expect(filter(isEven, subjectA))
				.not.toBe(subjectA)
			expect(filter(isEven, subjectB))
				.not.toBe(subjectB)

			expect(filter(isOdd, subjectA))
				.not.toBe(subjectA)
			expect(filter(isOdd, subjectB))
				.not.toBe(subjectB)
		})
	})
})


describe(`function filter(mapper, xs: Map)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return an empty Set`, () => {
			const subject = new Map()

			expect(filter(([ k, x ]) => isEven(x), subject))
				.toEqual(new Map())
			expect(filter(([ k, x ]) => isOdd(x), subject))
				.toEqual(new Map())
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return a String, with every value "x" which passes a given predicate`, () => {
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

	context(`case: in === out`, () => {
		it(`should return a new Set`, () => {
			const subjectA = new Map(),
				subjectB = new Map([
					[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
					[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
				])

			expect(filter(() => false, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => false, subjectB))
				.not.toBe(subjectB)

			expect(filter(() => true, subjectA))
				.not.toBe(subjectA)
			expect(filter(() => true, subjectB))
				.not.toBe(subjectB)

			expect(filter(([ k, x ]) => isEven(x), subjectA))
				.not.toBe(subjectA)
			expect(filter(([ k, x]) => isEven(x), subjectB))
				.not.toBe(subjectB)

			expect(filter(([ k, x ]) => isOdd(x), subjectA))
				.not.toBe(subjectA)
			expect(filter(([ k, x ]) => isOdd(x), subjectB))
				.not.toBe(subjectB)
		})
	})
})