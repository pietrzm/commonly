import autocurry from "Function/autocurry/autocurry"
import seq from "Iterable/seq/seq"
import xdrop from "Transducer/xdrop/xdrop"



const drop = (n, xs) =>
	seq(xdrop(n), xs)



export default autocurry(drop)