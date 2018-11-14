import { slice } from "../../List"


const take = (n, xs) =>
    slice(0, n, xs)


export default take