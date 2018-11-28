import { curry } from "../../Function/index"
import Filter from "../../Protocol/Transducer/Filter/Filter"



const filter = (predicate, reducer) =>
    new Filter(predicate, reducer)



export default curry(filter)