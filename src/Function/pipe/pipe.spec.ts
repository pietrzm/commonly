import pipe     from "Function/pipe/pipe"
import identity from "Function/identity/identity"
import add      from "Math/add/add"
import multiply from "Math/multiply/multiply"



describe(`function pipe(...functions)`, () => {
	context(`functions is empty`, () => {
		it(`should return identity function`, () => {
			const subject = pipe()

			expect(subject)
				.toBe(identity)
		})
	})

	context(`functions has only one element`, () => {
		it(`should return passed in function`, () => {
			const subjectA = pipe(add),
				subjectB = pipe(multiply)

			expect(subjectA)
				.toBe(add)
			expect(subjectB)
				.toBe(multiply)
		})
	})

	context(`functions is not empty`, () => {
		it(`should return a composed function, reading from right to left`, () => {
			const subjectA = pipe(add(3), multiply(3)),
				subjectB = pipe(multiply(3), add(3))

			expect(subjectA(2))
				.toEqual(15)
			expect(subjectB(2))
				.toEqual(9)
		})
	})
})