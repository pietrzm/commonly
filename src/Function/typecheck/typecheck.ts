import { RuntimeType } from "RuntimeType"



const typecheck = (f: Function, type: RuntimeType) => {
    return (...varargs: any[]) => {
        let lastArg = null
        let currentType = type
        try {
            for (const argument of varargs) {
                lastArg = argument
                currentType = currentType.evaluate(argument)
                currentType = currentType.evaluate(f(argument))
            }
        } catch (e) {
            e.message = `${e.message}
				${type.toString()}
				${type.toUnderline()}

				Argument ${lastArg} must be a ${currentType.type}.
			`

            throw e
        }
    }
}



export default typecheck
