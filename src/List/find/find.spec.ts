import find from "./find"
import isEven from "Math/isEven/isEven"
import isOdd from "Math/isOdd/isOdd"



describe(`function find(predicate, xs: Array)`, () => {
	context(`xs is empty`, () => {
		it(`should return an undefined`, () => {
			const subject = []

			expect(find(isEven, subject))
				.toBe(undefined)
			expect(find(isOdd, subject))
				.toBe(undefined)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a number 0`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(find(isEven, subject))
				.toEqual(0)
		})

		it(`should return a number 1`, () => {
			const subject = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

			expect(find(isOdd, subject))
				.toEqual(1)
		})

		it(`should return an undefined`, () => {
			const subjectA = [ 0, 2, 8, 34 ],
				subjectB = [ 1, 1, 3, 5, 13, 21 ]

			expect(find(isEven, subjectB))
				.toEqual(undefined)
			expect(find(isOdd, subjectA))
				.toEqual(undefined)
		})
	})
})


describe(`function find(predicate, xs: String)`, () => {
	context(`xs is empty`, () => {
		it(`should return an undefined`, () => {
			const subject = ""

			expect(find(isEven, subject))
				.toEqual(undefined)
			expect(find(isOdd, subject))
				.toEqual(undefined)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a number 0`, () => {
			const subject = "0112358"

			expect(find(isEven, subject))
				.toEqual("0")
		})

		it(`should return a number 1`, () => {
			const subject = "0112358"

			expect(find(isOdd, subject))
				.toEqual("1")
		})

		it(`should return an undefined`, () => {
			const subjectA = "028",
				subjectB = "1135"

			expect(find(isEven, subjectB))
				.toEqual(undefined)
			expect(find(isOdd, subjectA))
				.toEqual(undefined)
		})
	})
})


describe(`function find(predicate, xs: Set)`, () => {
	context(`xs is empty`, () => {
		it(`should return an undefined`, () => {
			const subject = new Set()

			expect(find(isEven, subject))
				.toEqual(undefined)
			expect(find(isOdd, subject))
				.toEqual(undefined)
		})
	})

	context(`xs is not empty`, () => {
		it(`should return a number 0`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(find(isEven, subject))
				.toEqual(0)
		})

		it(`should return a number 1`, () => {
			const subject = new Set([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

			expect(find(isOdd, subject))
				.toEqual(1)
		})

		it(`should return an undefined if no value passes a given predicate`, () => {
			const subjectA =  new Set([ 0, 2, 8, 34 ]),
				subjectB =  new Set([ 1, 1, 3, 5, 13, 21 ])

			expect(find(isEven, subjectB))
				.toEqual(undefined)
			expect(find(isOdd, subjectA))
				.toEqual(undefined)
		})
	})
})


describe(`function find(predicate, xs: Map)`, () => {
	context(`xs is empty`, () => {
		it(`should return an undefined`, () => {
			const subject = new Map()

			expect(find(([ k, x ]) => isEven(x), subject))
				.toEqual(undefined)
			expect(find(([ k, x ]) => isOdd(x), subject))
				.toEqual(undefined)
		})
	})

	context(`case: not(isEmpty(xs))`, () => {
		it(`should return a tuple [ "A", 0 ]`, () => {
			const subject = new Map([
				[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
				[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
			])

			expect(find(([ k, x ]) => isEven(x), subject))
				.toEqual([ "A", 0 ])
		})

		it(`should return a tuple [ "A", 1 ]`, () => {
			const subject = new Map([
				[ "A", 0 ], [ "B", 1 ], [ "C", 1 ],  [ "D", 2 ],  [ "E", 3 ],
				[ "F", 5 ], [ "G", 8 ], [ "H", 13 ], [ "I", 21 ], [ "J", 34 ]
			])

			expect(find(([ k, x ]) => isOdd(x), subject))
				.toEqual([ "B", 1 ])
		})

		it(`should return an undefined`, () => {
			const subjectA = new Map([
				[ "A", 0 ], [ "D", 2 ],
				[ "G", 8 ], [ "J", 34 ]
			])
			const subjectB = new Map([
				[ "B", 1 ], [ "C", 1 ],  [ "E", 3 ],
				[ "F", 5 ], [ "H", 13 ], [ "I", 21 ]
			])

			expect(find(([ k, x ]) => isEven(x), subjectB))
				.toEqual(undefined)
			expect(find(([ k, x ]) => isOdd(x), subjectA))
				.toEqual(undefined)
		})
	})
})