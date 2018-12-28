namespace Iterable {
	export const iterator = "@@iterator"
}


interface Iterable {
	[ Iterable.iterator ]
}



export default Iterable