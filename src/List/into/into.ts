import curry       from "Function/curry/curry"

import reducer     from "Function/reducer/reducer"
import transduce   from "List/transduce/transduce"



const into = (accumulator, xf, xs) =>
	transduce(xf, reducer(accumulator), accumulator, xs)



export default curry(into)