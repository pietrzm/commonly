import autocurry from "Function/autocurry/autocurry"
import map from "Iterable/map/map"
import { def, evaluate, rfunction, rnumber, rstring } from "./index"



const add = autocurry(
    (a: number, b: number) =>
        "a + b"
)



xit (`runtime type`, () => {
    const df = def(add, rfunction(rnumber(), rfunction(rstring(), rnumber())))

    expect(() => df(1)("1"))
        .not.toThrow()
})


it (`runtime type2`, () => {
    const df = def(map, rfunction(rfunction(rstring(), rstring()), rfunction(rstring(), rstring())))

    expect(() => df((x: number) => +x)( "12345"))
        .not.toThrow()
})
