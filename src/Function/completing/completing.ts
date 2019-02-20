import identity from "Function/identity/identity"



const completing = (reducer) => {
    reducer.completion = identity
    return reducer
}



export default completing
