import curry from "Function/curry/curry"



const subtract = (minuend, subtrahend) =>
    minuend - subtrahend;



export default curry(subtract)