import castArray from "Reflection/castArray/castArray"



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
