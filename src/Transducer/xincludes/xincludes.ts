import reduced from "Function/reduced/reduced"



const xincludes = <T>(needle: T) =>
    (xf) => {
        const transducer = (accumulator, value) =>
            needle === value &&
                reduced(true)

        transducer.completion = (accumulator) =>
            xf.completion(false)


        return transducer
    }



export default xincludes
