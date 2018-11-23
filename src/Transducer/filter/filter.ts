import { curry } from "../../Function/index"


const filter = (predicate, reducer) => (accumulator, value) =>
    predicate(value) ? 
        reducer(accumulator, value)
        : accumulator


export default curry(filter)