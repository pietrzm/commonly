import identity from "Function/identity/identity"
import xchain from "Transducer/xchain/xchain"



const xflatten = (xs) =>
    xchain(identity, xs)



export default xflatten
