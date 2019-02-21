import reduced from "Function/reduced/reduced"



const xnth = (i) =>
    (xf) => {
        const state = {
            found: false
        }

        const transducer = (accumulator, value) =>
            i-- === 0 ?
                (state.found = true, reduced(value))
                : accumulator

        transducer.completion = (accumulator) =>
            state.found ?
                xf.completion(accumulator)
                : xf.completion(undefined)


        return transducer
    }



export default xnth