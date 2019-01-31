import identity from "Function/identity/identity"
import xchain from "Transducer/xchain/xchain"
import Reducer from "Type/Reducer/Reducer"



const xflatten = (reducer) =>
    xchain(identity, reducer)



export default xflatten as {
    <T, U>(reducer: Reducer<U, T>): Reducer<U, T>
}
