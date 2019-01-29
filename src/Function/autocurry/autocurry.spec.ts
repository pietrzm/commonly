import autocurry from "./autocurry"



describe(`function autocurry(f)`, () => {
	const nullary = () => null,
		unary = (a) => a,
		binary = (a, b) => a + b,
		ternary = (a, b, c) => a + b * c


	context(`f is a nullary function`, () => {
		it(`should return f`, () => {
			const subject = autocurry(nullary)

			expect(subject)
				.toBe(nullary)
		})
	})

	context(`f is an unary function`, () => {
		it(`should return f`, () => {
			const subject = autocurry(unary)

			expect(subject)
				.toBe(unary)
		})
	})

	context(`f is a binary function`, () => {
		it(`should not return f`, () => {
			expect(autocurry(binary))
				.not.toBe(binary)
		})

		it(`should return curried f function`, () => {
			const f = binary,
				df = autocurry(f)

			expect(df(0)(1))
				.toEqual(f(0, 1))
			expect(df(0, 1))
				.toEqual(f(0, 1))
		})

		context(`autocurry(f) carries the same metadata as f`, () => {
			it(`should persist name property`, () => {
				const f = binary,
					df = autocurry(f)

				expect(df.name)
					.toEqual(f.name)
				expect(df(1).name)
					.toEqual(f.name)
			})

			it(`should persist toString() call result`, () => {
				const f = binary,
					df = autocurry(f)

				expect(df.toString())
					.toEqual(f.toString())
				expect(df(1).toString())
					.toEqual(f.toString())
			})

			it(`should correctly calculate length property`, () => {
				const f = binary,
					df = autocurry(f)

				expect(df.length)
					.toEqual(f.length)
				expect(df(1).length)
					.toEqual(f.length - 1)
			})
		})
	})

	context(`f is a ternary function`, () => {
		it(`should not return f`, () => {
			expect(autocurry(ternary))
				.not.toBe(ternary)
		})

		it(`should return curried f function`, () => {
			const f = ternary,
				df = autocurry(f)

			expect(df(0, 1, 1))
				.toEqual(f(0, 1, 1))
			expect(df(0, 1)(1))
				.toEqual(f(0, 1, 1))
			expect(df(0)(1, 1))
				.toEqual(f(0, 1, 1))
			expect(df(0)(1)(1))
				.toEqual(f(0, 1, 1))
		})

		context(`autocurry(f) carries the same metadata as f`, () => {
			it(`should persist name property`, () => {
				const f = ternary,
					df = autocurry(f)

				expect(df.name)
					.toEqual(f.name)
				expect(df(1).name)
					.toEqual(f.name)
				expect(df(1, 2).name)
					.toEqual(f.name)
				expect(df(1)(2).name)
					.toEqual(f.name)
			})

			it(`should persist toString() call result`, () => {
				const f = ternary,
					df = autocurry(f)

				expect(df.toString())
					.toEqual(f.toString())
				expect(df(1).toString())
					.toEqual(f.toString())
				expect(df(1, 2).toString())
					.toEqual(f.toString())
				expect(df(1)(2).toString())
					.toEqual(f.toString())
			})

			it(`should correctly calculate length property`, () => {
				const f = ternary,
					df = autocurry(f)

				expect(df.length)
					.toEqual(f.length)
				expect(df(1).length)
					.toEqual(f.length - 1)
				expect(df(1, 2).length)
					.toEqual(f.length - 2)
				expect(df(1)(2).length)
					.toEqual(f.length - 2)
			})
		})
	})
})