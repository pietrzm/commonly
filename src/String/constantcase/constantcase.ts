import snakecase from "String/snakecase/snakecase"
import uppercase from "String/uppercase/uppercase"



const constantcase = (string: string) =>
    uppercase(snakecase(string))



export default constantcase
