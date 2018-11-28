import { slice } from "../../List"
import { curry } from "../../Function"



const take = (n, xs) =>
    slice(0, n, xs)



export default curry(take)