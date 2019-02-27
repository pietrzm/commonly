import { RFunction, RNumber, RString } from "RuntimeType/index"



it(`RuntimeType`, () => {
    const definition = new RFunction(new RNumber(), new RFunction(new RString(), new RNumber()))

    const df = () => {
        try {
            definition
                .evaluate(1)
                .evaluate("1")
                .evaluate(1)
        } catch (e) {
            e.message = `${e.message}
					${definition.toString()}
					${definition.toUnderline()}
			`
            throw e
        }
    }

    expect(df)
        .not.toThrow()
})
