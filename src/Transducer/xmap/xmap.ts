const xmap = (mapper) =>
    (reducer) => {
        const transducer = (accumulator, value) =>
            reducer(accumulator, mapper(value))

        transducer.completion = (accumulator) =>
            reducer.completion(accumulator)


        return transducer
    }



export default xmap
