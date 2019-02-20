import reduced from "Function/reduced/reduced"



const xslice = (i, j) =>
    (xf) => {
        j = j - i

        const transducer = (accumulator, value) => {
            if (i-- > 0) {
                return accumulator
            } else {
                if (j-- === 0) {
                    return reduced(accumulator)
                }

                return xf(accumulator, value)
            }
        }

        transducer.completion = (accumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xslice
