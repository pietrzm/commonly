import reduced from "Function/reduced/reduced"



const xfind = (predicate) =>
    (xf) => {
        const state = {
            found: false
        }

        const transducer = (accumulator, value) =>
            predicate(value) ?
                (state.found = true, reduced(value))
                : accumulator

        transducer.completion = (accumulator) =>
            state.found ?
                xf.completion(accumulator)
                : xf.completion(undefined)


        return transducer
    }



export default xfind
