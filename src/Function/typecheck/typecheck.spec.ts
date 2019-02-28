import { RFunction, RNumber, RString } from "RuntimeType"
import typecheck from "./typecheck"



describe(`function typecheck(f, type)`, () => {
    const add = (a: number) => (b: number) =>
        a + b

    context(``, () => {
        it(``, () => {
            const addR = typecheck(add, new RFunction(new RNumber(), new RFunction(new RString(), new RNumber())))

            expect(() => addR(1, "1"))
                .not.toThrow()
        })
    })
})
