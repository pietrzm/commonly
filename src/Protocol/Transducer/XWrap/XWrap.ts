import TransformerProtocol from "../TransformerProtocol/TransformerProtocol"



class XWrap implements TransformerProtocol {

    private readonly transformer = null

    constructor(transformer) {
        this.transformer = transformer
    }


    [ TransformerProtocol.INIT ]() {
        throw new Error("Method not implemented.")
    }

    [ TransformerProtocol.STEP ](accumulator, x) {
        return this.transformer(x)
    }

    [ TransformerProtocol.COMPLETION ](accumulator) {
        throw new Error( "Method not implemented." )
    }

}



export default XWrap