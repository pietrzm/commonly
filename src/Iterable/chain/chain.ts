import curry from "Function/curry/curry"
import seq from "Iterable/seq/seq"
import xchain from "Transducer/xchain/xchain"



const chain = (mapper, xs) =>
	seq(xchain(mapper), xs)



export default curry(chain)