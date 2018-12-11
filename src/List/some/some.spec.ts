import some from "./some"
import { isEven, isOdd } from "Math"



describe(`function some(mapper, xs: Array)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = []

			expect(some(isEven, subject))
				.toEqual(false)
			expect(some(isOdd, subject))
				.toEqual(false)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(some(isEven, subject))
				.toEqual(true)
			expect(some(isOdd, subject))
				.toEqual(true)
		})

	    it(`should return false`, () => {
			const subjectA = [ 0, 2, 8, 34 ],
				subjectB = [ 1, 1, 3, 5, 13, 21 ]

			expect(some(isEven, subjectB))
				.toEqual(false)
			expect(some(isOdd, subjectA))
				.toEqual(false)
		})
	})
})


describe(`function some(mapper, xs: String)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = ""

			expect(some(isEven, subject))
				.toEqual(false)
			expect(some(isOdd, subject))
				.toEqual(false)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subject = "0112358"

			expect(some(isEven, subject))
				.toEqual(true)
			expect(some(isOdd, subject))
				.toEqual(true)
		})

	    it(`should return false`, () => {
			const subjectA = "028",
				subjectB = "1135"

			expect(some(isEven, subjectB))
				.toEqual(false)
			expect(some(isOdd, subjectA))
				.toEqual(false)
		})
	})
})


describe(`function some(mapper, xs: Set)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = new Set()

			expect(some(isEven, subject))
				.toEqual(false)
			expect(some(isOdd, subject))
				.toEqual(false)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(some(isEven, subject))
				.toEqual(true)
			expect(some(isOdd, subject))
				.toEqual(true)
		})

	    it(`should return false`, () => {
			const subjectA = new Set([ 0, 2, 8, 34 ]),
				subjectB = new Set([ 1, 1, 3, 5, 13, 21 ])

			expect(some(isEven, subjectB))
				.toEqual(false)
			expect(some(isOdd, subjectA))
				.toEqual(false)
		})
	})
})


describe(`function some(mapper, xs: Map)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = new Map()

			expect(some(([ k, x ]) => isEven(x), subject))
				.toEqual(false)
			expect(some(([ k, x ]) => isOdd(x), subject))
				.toEqual(false)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subject = new Map([
				[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
				[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
			])

			expect(some(([ k, x ]) => isEven(x), subject))
				.toEqual(true)
			expect(some(([ k, x ]) => isOdd(x), subject))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const subjectA = new Map([
				[ "A", 0 ], [ "D", 2 ],
				[ "G", 8 ], [ "J", 34 ]
			])
			const subjectB = new Set([
				[ "B", 1 ], [ "C", 1 ],  [ "E", 3 ],
				[ "F", 5 ], [ "H", 13 ], [ "I", 21 ]
			])

			expect(some(([ k, x ]) => isEven(x), subjectB))
				.toEqual(false)
			expect(some(([ k, x ]) => isOdd(x), subjectA))
				.toEqual(false)
		})
	})
})