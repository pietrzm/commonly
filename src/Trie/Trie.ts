import TrieNode from "./TrieNode"
import isUndefined from "Type/isUndefined/isUndefined"

export default class Trie<T> {

    root: TrieNode<T> = new TrieNode<T>(undefined, '')

    add(value, key: string): boolean {
        return this.root.add(value, key)
    }

    remove(key: string): boolean {
        return this.root.remove(key)
    }

    find(key: string): T {
        const found = this.root.find(key)
        return isUndefined(found) ? undefined : found.value
    }

    size(): number {
        return this.root.size()
    }

    isEmpty(): boolean {
        return this.root.children.length === 0
    }

    toArray(): {key: string, value: T}[] {
        return this.root.toArray([]).map(e => { return { key: e.key(), value: e.value } })
    }

    values(): T[] {
        return this.root.toArray([]).map(e => e.value)
    }

    keys(): string[] {
        return this.root.toArray([]).map(e => e.key())
    }

    [Symbol.iterator]() {
        return this.toArray()[Symbol.iterator]()
    }
}