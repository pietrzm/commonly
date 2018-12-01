import { reduce } from "List"



const compose = (...fs) =>
    reduce((accumulator, f) => (...vargs) => accumulator(f(...vargs)), x => x, fs)



export default compose