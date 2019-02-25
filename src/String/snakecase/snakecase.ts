import lowercase from "String/lowercase/lowercase"
import words from "String/words/words"



const snakecase = (string: string) =>
    words(lowercase(string)).join("_")



export default snakecase
