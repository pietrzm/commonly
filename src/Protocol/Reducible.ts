namespace Reducible {
	export const reducer = "@@reducer"
}


export interface Reducible {
	[ Reducible.reducer ]
}



export default Reducible