const throttle = (f: (...varargs) => void, wait = 0): (...varargs) => void => {
    const state = {
        timeoutID: 0
    }

    const throttled = (...varargs) => {
        throttled.cancel()
        state.timeoutID = setTimeout(f, wait, ...varargs)
    }

    throttled.cancel = () =>
        clearTimeout(state.timeoutID)


    return throttled
}



export default throttle
