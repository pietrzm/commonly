import identity from "Function/identity/identity"
import xchain from "Transducer/xchain/xchain"



const xflatten =
    xchain(identity)



export default xflatten
