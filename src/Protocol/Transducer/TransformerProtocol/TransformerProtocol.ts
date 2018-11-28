namespace TransformerProtocol {
    export const INIT = "@@transducer/init"
    export const STEP = "@@transducer/step"
    export const COMPLETION = "@@transducer/result"
}


interface TransformerProtocol {
    [ TransformerProtocol.INIT ]()
    [ TransformerProtocol.STEP ](accumulator, x)
    [ TransformerProtocol.COMPLETION ](accumulator)
}



export default TransformerProtocol