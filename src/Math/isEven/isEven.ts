import not from "Logic/not/not"



const isEven = (number) =>
    not((number % 2))



export default isEven as {
    (number: number): boolean
}
