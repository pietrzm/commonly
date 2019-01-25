import autocurry from "./autocurry"



describe(`function autocurry(f)`, () => {
	const nullary = () => null,
		unary = (a) => a,
		binary = (a, b) => a + b,
		ternary = (a, b, c) => a + b * c


	context(`case: nullary function`, () => {
		it(`should return a reference to the passed in function`, () => {
			const subject = autocurry(nullary)

			expect(subject)
				.toBe(nullary)
		})
	})

	context(`case: unary function`, () => {
		it(`should return a reference to the passed in function`, () => {
			const subject = autocurry(unary)

			expect(subject)
				.toBe(unary)
		})
	})

	context(`case: n-ary function`, () => {
		it(`should return a new function`, () => {
			const subjectA = autocurry(binary),
				subjectB = autocurry(ternary)

			expect(subjectA)
				.not.toBe(binary)
			expect(subjectB)
				.not.toBe(ternary)
		})

		it(`should create a curried "f" function`, () => {
			const subjectA = autocurry(binary),
				subjectB = autocurry(ternary)

			expect(subjectA(1)(2))
				.toEqual(binary(1, 2))
			expect(subjectB(1)(2)(3))
				.toEqual(ternary(1, 2, 3))
		})
	})
})