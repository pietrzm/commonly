import reduced from "Function/reduced/reduced"



const xslice = (i, j) =>
    (xf) => {
        const state = {
           begin: i,
           end: j - i
        }

        const transducer = (accumulator, value) => {
            if (state.begin-- > 0) {
                return accumulator
            } else {
                if (state.end-- === 0) {
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
