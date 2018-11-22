import { curry } from "../../Function"
import into from "../into/into"
import seed from "../seed/seed"


const seq = (xf, xs) =>
    into(seed(xs), xf, xs)


export default curry(seq)