import { head } from "List"
import { isArray } from "Type"



const isReduced = x =>
    isArray(x) && isReduced === head(x)



export default isReduced