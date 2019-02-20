const xfilter = (predicate) =>
    (xf) => {
        const transducer = (accumulator, value) =>
            predicate(value) ?
                xf(accumulator, value)
                : accumulator

        transducer.completion = (accumulator) =>
            xf.completion(accumulator)


        return transducer
    }



export default xfilter
