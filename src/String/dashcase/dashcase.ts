import lowercase from "String/lowercase/lowercase"
import words from "String/words/words"



const dashcase = (string: string) =>
    words(lowercase(string)).join("-")



export default dashcase
