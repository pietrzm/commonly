import { slice, size } from "../../List"



const tail = xs =>
    slice(1, size(xs), xs)



export default tail