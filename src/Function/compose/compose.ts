import reduce from "List/reduce/reduce"



const compose = (...fs) =>
    reduce((accumulator, f) => (...vargs) => accumulator(f(...vargs)), x => x, fs)



export default compose