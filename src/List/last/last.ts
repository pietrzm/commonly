import { nth, size } from "List"



const last = (xs) =>
    nth(size(xs) - 1, xs)



export default last