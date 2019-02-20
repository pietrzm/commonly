import castArray from "Reflection/castArray/castArray"



const xchain = (mapper) =>
    (xf) => {
        const transducer = (accumulator, value) => {
            for (const x of castArray(mapper(value))) {
                xf(accumulator, x)
            }

            return accumulator
        }

        transducer.completion = (accumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xchain
