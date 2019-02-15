import Reduced from "Protocol/Reduced"



const reduced = <T>(value: T): Reduced<T> =>
    ({ [ Reduced.reduced ]: true, value })



export default reduced
