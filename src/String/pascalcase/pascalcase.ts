import map from "Iterable/map/map"
import capitalize from "String/capitalize/capitalize"
import words from "String/words/words"



const pascalcase = (string: string) =>
    map(capitalize, words(string)).join("")



export default pascalcase
