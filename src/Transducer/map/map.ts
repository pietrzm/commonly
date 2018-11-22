import { curry } from "../../Function/index"


const map = (xf, reducer) => (accumulator, value) =>
    reducer(accumulator, xf(value))


export default curry(map)