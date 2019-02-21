import identity from "Function/identity/identity"
import castArray from "Reflection/castArray/castArray"
import xchain from "Transducer/xchain/xchain"



const xflatten =
    (xf) => {
        const transducer = (accumulator, value) => {
            for (const x of castArray(value)) {
                xf(accumulator, x)
            }

            return accumulator
        }

        transducer.completion = (accumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xflatten
