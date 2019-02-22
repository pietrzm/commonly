type Reducer<TAccumulator, TResult, TValue> =
    (accumulator: TAccumulator, value: TValue) =>
        TResult



export default Reducer
