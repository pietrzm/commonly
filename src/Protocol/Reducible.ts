namespace Reducible {
	export const reducer = "@@reducer"
}


interface Reducible<T, V> {
	[ Reducible.reducer ]: (akumulator: T, value: V) => T
}



export default Reducible