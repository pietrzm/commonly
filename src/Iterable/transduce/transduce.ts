import curry from "Function/curry/curry"
import reduce from "Iterable/reduce/reduce"



const transduce = (xf, reducer, accumulator, xs) =>
    reduce(xf(reducer), accumulator, xs)


const __transduce_3x1 = (xf, reducer, accumulator) => (xs) =>
	transduce(xf, reducer, accumulator, xs)

const __transduce_2x1 = (xf, reducer) => (accumulator) =>
	__transduce_3x1(xf, reducer, accumulator)

const __transduce_2x2 = (xf, reducer) => (accumulator, xs) =>
	transduce(xf, reducer, accumulator, xs)

const __transduce_1x1 = (xf) => (reducer) =>
	__transduce_2x1(xf, reducer)

const __transduce_1x3 = (xf) => (reducer, accumulator, xs) =>
	transduce(xf, reducer, accumulator, xs)

const __transduce_1x2 = (xf) => (reducer, accumulator) =>
	__transduce_3x1(xf, reducer, accumulator)


const __transduce_2 = (xf, reducer) => curry(
	__transduce_2x1(xf, reducer),
	__transduce_2x2(xf, reducer)
)

const __transduce_1 = (xf) => curry(
	__transduce_1x1(xf),
	__transduce_1x2(xf),
	__transduce_1x3(xf),
)

export default curry(
	transduce,
	__transduce_3x1,
	__transduce_2,
	__transduce_1
)