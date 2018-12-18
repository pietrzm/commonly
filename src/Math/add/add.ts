import curry from "Function/curry/curry"



const add = (augend, addend) =>
    augend + addend;



export default curry(add)