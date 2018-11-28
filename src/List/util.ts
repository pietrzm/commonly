import { curry } from "../Function"
import push from "./push/push"


const transducerMap = xf => reducer => (accumulator, value) =>
    reducer(accumulator, xf(value))

const reducerArray = (xs, y) =>
    push(y, xs)