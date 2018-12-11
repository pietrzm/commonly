import every from "./every"
import { isEven, isOdd } from "Math"



describe(`function every(mapper, xs: Array)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = []

			expect(every(isEven, subject))
				.toEqual(true)
			expect(every(isOdd, subject))
				.toEqual(true)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subjectA = [ 0, 2, 8, 34 ],
				subjectB = [ 1, 1, 3, 5, 13, 21 ]

			expect(every(isEven, subjectA))
				.toEqual(true)
			expect(every(isOdd, subjectB))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(every(isEven, subject))
				.toEqual(false)
			expect(every(isOdd, subject))
				.toEqual(false)
		})
	})
})


describe(`function every(mapper, xs: String)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = ""

			expect(every(isEven, subject))
				.toEqual(true)
			expect(every(isOdd, subject))
				.toEqual(true)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subjectA = "028",
				subjectB = "1135"

			expect(every(isEven, subjectA))
				.toEqual(true)
			expect(every(isOdd, subjectB))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const subject = "0112358"

			expect(every(isEven, subject))
				.toEqual(false)
			expect(every(isOdd, subject))
				.toEqual(false)
		})
	})
})


describe(`function every(mapper, xs: Set)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = new Set()

			expect(every(isEven, subject))
				.toEqual(true)
			expect(every(isOdd, subject))
				.toEqual(true)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subjectA = new Set([ 0, 2, 8, 34 ]),
				subjectB = new Set([ 1, 1, 3, 5, 13, 21 ])

			expect(every(isEven, subjectA))
				.toEqual(true)
			expect(every(isOdd, subjectB))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(every(isEven, subject))
				.toEqual(false)
			expect(every(isOdd, subject))
				.toEqual(false)
		})
	})
})


describe(`function every(mapper, xs: Map)`, () => {
	context(`case: isEmpty(xs)`, () => {
		it(`should return true`, () => {
			const subject = new Map()

			expect(every(([ k, x ]) => isEven(x), subject))
				.toEqual(true)
			expect(every(([ k, x ]) => isOdd(x), subject))
				.toEqual(true)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return true`, () => {
			const subjectA = new Map([
				[ "A", 0 ], [ "D", 2 ],
				[ "G", 8 ], [ "J", 34 ]
			])
			const subjectB = new Set([
				[ "B", 1 ], [ "C", 1 ],  [ "E", 3 ],
				[ "F", 5 ], [ "H", 13 ], [ "I", 21 ]
			])

			expect(every(([ k, x ]) => isEven(x), subjectA))
				.toEqual(true)
			expect(every(([ k, x ]) => isOdd(x), subjectB))
				.toEqual(true)
		})

		it(`should return false`, () => {
			const subject = new Map([
				[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
				[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
			])

			expect(every(([ k, x ]) => isEven(x), subject))
				.toEqual(false)
			expect(every(([ k, x ]) => isOdd(x), subject))
				.toEqual(false)
		})
	})
})