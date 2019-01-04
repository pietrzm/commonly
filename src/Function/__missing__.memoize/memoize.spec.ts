import memoize  from "Function/__missing__.memoize/memoize"
import identity from "Function/identity/identity"
import random   from "Number/__missing__.random/random"



describe.skip(`function memoize(f)`, () => {
	const mf = memoize((x) => random())

	context(`arguments are always the same`, () => {
		it(`should always return the same number`, () => {
			for (let i = 0, rn = mf("A"); i < 1e+2; i++) {
				expect(rn)
					.toEqual(rn = mf("A"))
			}
		})
	})
})


describe.skip(`function memoize(f, resolver)`, () => {
	const mf = memoize((x) => random(), identity)

	context(`arguments are always the same`, () => {
		it(`should always return the same number`, () => {
			for (let i = 0, rn = mf("A", 0); i < 1e+2; i++) {
				expect(rn)
					.toEqual(rn = mf("A", random()))
			}
		})
	})
})