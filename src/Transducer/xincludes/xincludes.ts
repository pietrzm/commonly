import reduced from "Function/reduced/reduced"



const xincludes = <T>(needle: T) =>
    (xf) => {
        const state = {
            found: false
        }

        const transducer = (accumulator, value) =>
            needle === value &&
                (state.found = true, reduced(true))

        transducer.completion = (accumulator) =>
            state.found ?
                xf.completion(accumulator)
                : xf.completion(false)


        return transducer
    }



export default xincludes
