import compose from "Function/compose/compose"
import xflatten from "Transducer/xflatten/xflatten"
import xmap from "Transducer/xmap/xmap"
import Mapper from "Type/Mapper/Mapper"
import Transducer from "Type/Transducer/Transducer"



const xchain = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>): Transducer<TAccumulator, TAccumulator, TValueA, TAccumulator, TAccumulator, TValueB> =>
    compose(xmap(mapper), xflatten)



export default xchain
