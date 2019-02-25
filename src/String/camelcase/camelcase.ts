import map from "Iterable/map/map"
import capitalize from "String/capitalize/capitalize"
import lowercase from "String/lowercase/lowercase"
import words from "String/words/words"



const camelcase = (string: string) => {
    const [ first, ...rest ] = map(capitalize, words(string))
    return [ lowercase(first || ""), ...rest ].join("")
}



export default camelcase
