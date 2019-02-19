const debounce = (f: (...varargs) => void, wait = 0): (...varargs) => void => {
    const state = {
        timeoutID: 0
    }

    const debounced = (...varargs) => {
        debounced.cancel()
        state.timeoutID = setTimeout(f, wait, ...varargs)
    }

    debounced.cancel = () =>
        clearTimeout(state.timeoutID)


    return debounced
}



export default debounce
