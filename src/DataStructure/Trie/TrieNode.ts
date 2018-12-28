import isUndefined from "Type/isUndefined/isUndefined"
import add from "Math/add/add"
import map from "List/map/map"
import reduce from "List/reduce/reduce"

export default class TrieNode<T> {

    keypart: string
    value: T
    parent: TrieNode<T>
    children: TrieNode<T>[] = []

    constructor(value: T, keypart: string, parent: TrieNode<T> = undefined) {
        this.value = value
        this.keypart = keypart
        this.parent = parent
    }

    add(value: T, key: string): boolean {
        if (key === this.keypart) {
            return false
        }
        const common = this._commonPrefix(this.keypart, key)
        if (common.prefix === this.keypart) {
            const possible = this.children.filter(c => c.keypart[0] === common.keys[1][0])
            if (possible.length === 0) {
                this.children.push(new TrieNode<T>(value, common.keys[1], this))
            } else {
                return possible[0].add(value, common.keys[1])
            }
        } else if (common.prefix === key) {
            this._insertParent(new TrieNode<T>(value, common.prefix, this.parent))
            this.keypart = common.keys[0]
        } else {
            this._insertParent(new TrieNode<T>(undefined, common.prefix, this.parent))
            this.parent.children.push(new TrieNode<T>(value, common.keys[1], this.parent))
            this.keypart = common.keys[0]
        }
        return true
    }

    remove(key: string): boolean {
        const found = this.find(key)
        if (!isUndefined(found)) {
            if (found.children.length === 1) {
                found._collapse()
            } else if (found.children.length > 1) {
                found.value = undefined
            } else {
                found.parent.children = found.parent.children.filter(c => c !== found)
            }
            return true
        }
        return false
    }

    find(key: string): TrieNode<T> {
        if (key === this.keypart) {
            return this
        }
        const common = this._commonPrefix(this.keypart, key)
        if (common.prefix === this.keypart) {
            const possible = this.children.filter(c => c.keypart[0] === common.keys[1][0])
            return possible.length === 0 ? undefined : possible[0].find(common.keys[1])
        }
        return undefined
    }

    size(): number {
        return reduce(add, isUndefined(this.value) ? 0 : 1) (
            map(c => c.size()) (
                this.children
            )
        )
    }

    key(): string {
        return isUndefined(this.parent) ? this.keypart : this.parent.key() + this.keypart
    }

    toArray(currentArray: TrieNode<T>[]): TrieNode<T>[] {
        if (!isUndefined(this.value)) {
            currentArray.push(this)
        }
        this.children.forEach( c => c.toArray(currentArray))
        return currentArray
    }

    private _collapse() {
        this.children[0].keypart = this.keypart + this.children[0].keypart
        this.children[0].parent = this.parent
        this.parent.children = this.parent.children.filter(c => c !== this)
        this.parent.children.push(this.children[0])
    }

    private _insertParent(newParent: TrieNode<T>) {
        newParent.parent = this.parent
        this.parent.children = this.parent.children.filter(c => c !== this)
        this.parent.children.push(newParent)
        this.parent = newParent
        this.parent.children.push(this)
    }

    private _commonPrefix(key1: string, key2: string) {
        for (let i = 0; i < Math.max(key1.length, key2.length); i++) {
            if (key1[i] !== key2[i]) {
                return {
                    prefix: key1.slice(0, i),
                    keys: [key1.slice(i), key2.slice(i)]
                }
            }
        }
        return {
            prefix: '',
            keys: [key1, key2]
        }
    }
}