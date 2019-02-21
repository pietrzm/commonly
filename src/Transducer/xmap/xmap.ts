const xmap = (mapper) =>
    (xf) => {
        const transducer = (accumulator, value) =>
            xf(accumulator, mapper(value))

        transducer.completion = (accumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xmap
