import reduced from "Function/reduced/reduced"



const xhead =
    (xf) => {
        const state = {
            found: false
        }

        const transducer = (accumulator, value) =>
            (state.found = true, reduced(value))

        transducer.completion = (accumulator) =>
            state.found ?
                xf.completion(accumulator)
                : xf.completion(undefined)


        return transducer
    }



export default xhead
