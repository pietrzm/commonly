type Reducer<TValue, TAccumulator, TReduced> =
    (accumulator: TAccumulator, x: TValue, i: number) =>
        TAccumulator | TReduced



export default Reducer
