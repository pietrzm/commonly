import autocurry from "Function/autocurry/autocurry"



const subtract = (minuend, subtrahend) =>
    minuend - subtrahend;



export default autocurry(subtract)