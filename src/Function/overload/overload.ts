import { find } from "../../List"



const overload = (...fs) =>
    (...vargs) =>
        find(f => f.length === vargs.length,fs)(...vargs)



export default overload
