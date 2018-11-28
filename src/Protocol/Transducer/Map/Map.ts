import TransformerProtocol from "../TransformerProtocol/TransformerProtocol"



class Map implements TransformerProtocol {

    private readonly transformer = null
    private readonly xf: TransformerProtocol = null

    constructor(transformer, xf: TransformerProtocol) {
        this.transformer = transformer
        this.xf = xf
    }


    [ TransformerProtocol.INIT ]() {
        throw new Error("Method not implemented.")
    }

    [ TransformerProtocol.STEP ](accumulator, x) {
        return this.xf[ TransformerProtocol.STEP ](accumulator, this.transformer(x))
    }

    [ TransformerProtocol.COMPLETION ](accumulator) {
        throw new Error( "Method not implemented." )
    }

}



export default Map