import compose from "Function/compose/compose"
import identity from "Function/identity/identity"
import add from "Math/add/add"
import multiply from "Math/multiply/multiply"



describe(`function compose(...functions)`, () => {
	context(`functions is empty`, () => {
		it(`should return identity function`, () => {
			const subject = compose()

			expect(subject)
				.toBe(identity)
		})
	})

	// TODO: Implementation needs functions: head, tail
	context.skip(`functions has only one element`, () => {
		it(`should return passed in function`, () => {
			const subjectA = compose(add),
				subjectB = compose(multiply)

			expect(subjectA)
				.toBe(add)
			expect(subjectB)
				.toBe(multiply)
		})
	})

	context(`functions is not empty`, () => {
		it(`should return a composed function, reading from left to right`, () => {
			const subjectA = compose(add(3), multiply(3)),
				subjectB = compose(multiply(3), add(3))

			expect(subjectA(2))
				.toEqual(9)
			expect(subjectB(2))
				.toEqual(15)
		})
	})
})