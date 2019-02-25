import head from "Iterable/head/head"
import tail from "Iterable/tail/tail"
import uppercase from "String/uppercase/uppercase"



const capitalize = (string: string) =>
    uppercase(head(string) || "") + tail(string)



export default capitalize
