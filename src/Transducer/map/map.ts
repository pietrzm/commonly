import { curry } from "../../Function/index"
import Map from "../../Protocol/Transducer/Map/Map"



const map = (transformer, reducer) =>
    new Map(transformer, reducer)



export default curry(map)