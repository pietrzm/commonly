import xslice from "Transducer/xslice/xslice"



const xdrop =
    (n: number) =>
        xslice(n, Infinity)



export default xdrop
