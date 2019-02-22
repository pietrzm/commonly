import Completing from "Type/Completing/Completing"
import Reducer from "Type/Reducer/Reducer"



type Transducer<TAccumulatorA, TResultA, TValueA, TAccumulatorB = TAccumulatorA, TResultB = TResultA, TValueB = TValueA> =
    (xf: Reducer<TAccumulatorB, TResultB, TValueB> & Completing<TAccumulatorB, TResultB>) =>
        Reducer<TAccumulatorA, TResultA, TValueA> & Completing<TAccumulatorA, TResultA>



export default Transducer
