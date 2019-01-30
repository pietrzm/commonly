namespace Accumulable {
    export const accumulator = "@@accumulator"
}


interface Accumulable<T> {
    [ Accumulable.accumulator ](): Iterable<T>
}



export default Accumulable
