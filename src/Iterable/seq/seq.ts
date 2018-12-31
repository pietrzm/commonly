import curry from "Function/curry/curry"
import into  from "Iterable/into/into"
import seed  from "Iterable/seed/seed"



const seq = (xf, xs) =>
    into(seed(xs), xf, xs)



export default curry(seq)