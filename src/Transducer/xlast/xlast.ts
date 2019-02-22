const xlast =
    (xf) => {
        const state = {
            element: undefined
        }

        const transducer = (accumulator, value) =>
            xf(accumulator, state.element = value)

        transducer.completion = (accumulator) =>
                xf.completion(state.element)


        return transducer
    }


export default xlast
