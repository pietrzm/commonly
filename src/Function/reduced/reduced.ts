import Reduced from "Type/Reduced/Reduced"



const reduced = <T>(value: T): Reduced<T> =>
    ({ reduced: true, value })



export default reduced
