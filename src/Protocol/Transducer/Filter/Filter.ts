import TransformerProtocol from "../TransformerProtocol/TransformerProtocol"



class Filter implements TransformerProtocol {

    private readonly predicate = null
    private readonly reducer: TransformerProtocol = null

    constructor(predicate, xf: TransformerProtocol) {
        this.predicate = predicate
        this.reducer = xf
    }

    [ TransformerProtocol.INIT ]() {
        throw new Error("Method not implemented.")
    }

    [ TransformerProtocol.STEP ](accumulator, x) {
        if (this.predicate(x)) {
            return this.reducer[ TransformerProtocol.STEP ](accumulator, x)
        } else {
            return accumulator
        }
    }

    [ TransformerProtocol.COMPLETION ](accumulator) {
        throw new Error( "Method not implemented." )
    }

}



export default Filter