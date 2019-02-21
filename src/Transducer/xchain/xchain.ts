import compose from "Function/compose/compose"
import xflatten from "Transducer/xflatten/xflatten"
import xmap from "Transducer/xmap/xmap"



const xchain = (mapper) =>
    compose(xmap(mapper), xflatten)



export default xchain
