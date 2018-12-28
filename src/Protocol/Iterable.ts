namespace Iterable {
	export const iterator = "@@iterator"
}


export interface Iterable {
	[ Iterable.iterator ]
}



export default Iterable