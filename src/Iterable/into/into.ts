import autocurry       from "Function/autocurry/autocurry"

import reducer   from "Function/reducer/reducer"
import transduce from "Iterable/transduce/transduce"



const into = (accumulator, xf, xs) =>
	transduce(xf, reducer(accumulator), accumulator, xs)



export default autocurry(into)