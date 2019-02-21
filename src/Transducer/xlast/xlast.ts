const xlast =
    (xf) => {
        const state = {
            item: undefined
        }

        const transducer = (accumulator, value) =>
            xf(accumulator, state.item = value)

        transducer.completion = (accumulator) =>
                xf.completion(state.item)


        return transducer
    }


export default xlast
