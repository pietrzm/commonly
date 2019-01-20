namespace Accumulable {
    export const accumulator = "@@accumulator"
}


interface Accumulable {
    [ Accumulable.accumulator ]: Accumulable | string | any[]
}



export default Accumulable