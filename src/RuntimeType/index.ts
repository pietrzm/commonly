import isFunction from "Reflection/isFunction/isFunction"
import isNumber from "Reflection/isNumber/isNumber"
import isString from "Reflection/isString/isString"
import isUndefined from "Reflection/isUndefined/isUndefined"
import Predicate from "Type/Predicate/Predicate"



export class BinaryTreeNode<T> {
    private _parent: BinaryTreeNode<T> | undefined
    private readonly _left: BinaryTreeNode<T> | undefined
    private readonly _right: BinaryTreeNode<T> | undefined
    private readonly _value: T

    constructor(value: T, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
        this._value = value
        this._left = left
        this._right = right

        if (this._left) {
            this._left._parent = this
        }

        if (this._right) {
            this._right._parent = this
        }
    }

    get value () {
        return this._value
    }

    get root() {
        let node: BinaryTreeNode<T> = this
        while (!isUndefined(node.parent)) {
            node = node.parent
        }

        return node
    }

    get parent() {
        return this._parent
    }

    get left() {
        return this._left
    }

    get right() {
        return this._right
    }

    isLeaf() {
        return !this._left && !this._right
    }

    isRoot() {
        return !this._parent
    }

    toString() {

    }
}



//--
export interface RuntimeType {
    evaluate(argument: unknown): void | never
    toUnderline(): string
}

export class RFunction implements RuntimeType {
    private readonly _parameter: RuntimeType
    private readonly _returnValue: RuntimeType

    constructor(parameter: RuntimeType, returnValue: RuntimeType) {
        this._parameter = parameter
        this._returnValue = returnValue
    }

    evaluate(argument: unknown) {
        if (!isFunction(argument)) {
            throw new TypeError("Type of an argument is invalid. function")
        }
    }

    toString() {
        return `${this._parameter} -> ${this._returnValue}`
    }

    toUnderline() {
        return `${this._parameter.toUnderline()}    ${this._returnValue.toUnderline()}`
    }
}


export abstract class RTypeConstructor implements RuntimeType {
    private readonly _token: string
    private readonly _test: Predicate<unknown>
    private _throws = false

    protected constructor(token: string, test: Predicate<unknown>) {
        this._token = token
        this._test = test
    }

    evaluate(argument: unknown) {
        if (!this._test(argument)) {
            this._throws = true
            throw new TypeError(`Type of an argument is invalid. ${this._token}|${typeof argument}/${argument}`)
        }
    }

    toString() {
        return this._token
    }

    toUnderline() {
        const n = this.toString().length
        return (this._throws ? "^" : " ").repeat(n)
    }
}


export class RNumber extends RTypeConstructor implements RuntimeType {
    constructor() {
        super("Number", isNumber)
    }
}

export class RString extends RTypeConstructor implements RuntimeType {
    constructor() {
        super("String", isString)
    }
}



//--
export const evaluate = (f: Function, node: BinaryTreeNode<RuntimeType>) =>
    (x: unknown) => {
        try {
            if (node.left && node.right) {
                node.left.value.evaluate(x)
                if (!node.left.isLeaf()) {
                    console.log("?", x)
                    x = evaluate(x, node.left)
                }

                const fx = f(x)
                node.right.value.evaluate(fx)
                if (node.right.isLeaf()) {
                    return fx
                } else {
                    return evaluate(fx, node.right)
                }
            }
        } catch (e) {
            console.log(e.message, f)
            e.message = `${e.message}

	                    ${node.root.value.toString()}
	                    ${node.root.value.toUnderline()}
	            `

            throw e
        }

        throw new Error("This should not happen.")
    }


export const def = (f: Function, node: BinaryTreeNode<RuntimeType>) => {
    let df = evaluate(f, node)
    return (...varargs: unknown[]) => {
        for (const arg of varargs) {
            df = df(arg)
        }

        return df
    }
}


export const rnumber = () => new BinaryTreeNode(new RNumber())
export const rstring = () => new BinaryTreeNode(new RString())
export const rfunction = (parameter: BinaryTreeNode<RuntimeType>, returnValue: BinaryTreeNode<RuntimeType>) =>
    new BinaryTreeNode(new RFunction(parameter.value, returnValue.value), parameter, returnValue)
