namespace ReducedProtocol {
    export const REDUCED = "@@transducer/reduced"
    export const VALUE = "@@transducer/Value"
}

interface ReducedProtocol {
    [ ReducedProtocol.REDUCED ]()
    [ ReducedProtocol.VALUE ]()
}


export default ReducedProtocol