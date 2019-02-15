import Reducer from "Type/Reducer/Reducer"



type Transducer<TValueA, TValueB, TAccumulator, TReduced> =
    (reducer: Reducer<TValueB, TAccumulator, TAccumulator>) =>
        Reducer<TValueA, TAccumulator, TReduced>



export default Transducer
