import isNumber from "Reflection/isNumber/isNumber"
import isString from "Reflection/isString/isString"
import Predicate from "Type/Predicate/Predicate"



export interface RuntimeType {
    next(): RuntimeType
    evaluate(argument: unknown): RuntimeType | never
    isThrowing(): boolean
    toUnderline(): string
    toString(): string
}


export class RTypeConstructor implements RuntimeType {
    private readonly _token: string
    private readonly _test: Predicate<unknown>

    private _throws = false

    constructor(token: string, test: Predicate<unknown>) {
        this._token = token
        this._test = test
    }

    next() {
        return new RUnexpectedArgument()
    }

    evaluate(argument: unknown) {
        if (!this._test(argument)) {
            this._throws = true
            throw TypeError("Type of an argument is invalid.")
        }

        return this.next()
    }

    isThrowing() {
        return this._throws
    }

    toUnderline() {
        const n = this.toString().length
        return this.isThrowing() ?
            "^".repeat(n) : " ".repeat(n) + "\x1b[0m"
    }

    toString() {
        return this._token
    }
}


export class RNumber extends RTypeConstructor implements RuntimeType {
    constructor() {
        super("number", isNumber)
    }
}

export class RString extends RTypeConstructor implements RuntimeType {
    constructor() {
        super("string", isString)
    }
}


export class RFunction implements RuntimeType {
    private readonly _parameter: RuntimeType
    private readonly _returnValue: RuntimeType

    constructor(parameter: RuntimeType, returnValue: RuntimeType) {
        this._parameter = parameter
        this._returnValue = returnValue
    }

    next() {
        return this._returnValue
    }

    evaluate(argument: unknown) {
        this._parameter.evaluate(argument)
        return this.next()
    }

    isThrowing() {
        return false
    }

    toUnderline() {
        return `${this._parameter.toUnderline()}    ${this._returnValue.toUnderline()}`
    }

    toString() {
        return `${this._parameter} -> ${this._returnValue}`
    }
}


export class RUnexpectedArgument implements RuntimeType {
    next() {
        return new RUnexpectedArgument()
    }

    evaluate(argument: unknown): never {
        throw SyntaxError("Unexpected argument.")
    }

    isThrowing() {
        return true
    }

    toUnderline() {
        return ""
    }
}


