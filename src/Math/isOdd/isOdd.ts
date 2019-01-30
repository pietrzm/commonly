import not from "Logic/not/not"
import isEven from "Math/isEven/isEven"



const isOdd = (number) =>
    not(isEven(number))



export default isOdd
