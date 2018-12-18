import reduced from "Function/reduced/reduced"



describe(`function reduced(x)`, () => {
	context(`x is undefined`, () => {
		it(`should return true`, () => {
			const subject = undefined

			expect(reduced(subject))
				.toEqual({ [ "@@reduce/reduced" ]: true, value: subject })
		})
	})

	context(`x is null`, () => {
		it(`should return true`, () => {
			const subject = null

			expect(reduced(subject))
				.toEqual({ [ "@@reduce/reduced" ]: true, value: subject })
		})
	})

	context(`x is anything`, () => {
		it(`should return true`, () => {
			const object = {},
				array = [],
				symbol = Symbol()

			expect(reduced(object))
				.toEqual({ [ "@@reduce/reduced" ]: true, value: object })
			expect(reduced(array))
				.toEqual({ [ "@@reduce/reduced" ]: true, value: array })
			expect(reduced(symbol))
				.toEqual({ [ "@@reduce/reduced" ]: true, value: symbol })
		})
	})
})