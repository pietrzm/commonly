import curry from "Function/curry/curry"
import into from "List/into/into"
import seed from "List/seed/seed"



const seq = (xf, xs) =>
    into(seed(xs), xf, xs)



export default curry(seq)