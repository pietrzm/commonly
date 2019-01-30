namespace Reducible {
    export const reducer = "@@reducer"
}


interface Reducible<T, V> {
    [ Reducible.reducer ]: (accumulator: T, value: V) => T
}



export default Reducible
