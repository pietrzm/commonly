import autocurry from "Function/autocurry/autocurry"



const tap = <T>(f: (T) => void, value: T): T =>
    (f(value), value)



export default autocurry(tap) as {
    <T>(f: (T) => void, value: T): T
    <T>(f: (T) => void): (value: T) => T
}
