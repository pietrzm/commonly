import reduced from "Function/reduced/reduced"



const xfind = (predicate) =>
    (xf) => {
        const transducer = (accumulator, value) =>
            predicate(value) ?
                reduced(value)
                : accumulator

        transducer.completion = (accumulator) =>
            xf.completion(undefined)


        return transducer
    }



export default xfind
