namespace Reduced {
    export const reduced = "@@reducer/reduced"
}


interface Reduced<T> {
    [ Reduced.reduced ]: boolean
    value: T
}



export default Reduced
