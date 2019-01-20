

export default class ImmutableArray<T> implements Iterable<T> {
    
    private _array: T[] = []

    constructor(...array: T[]) {
        this._array = array.slice(0)
    }

    static of<T>(...items: T[]): ImmutableArray<T> {
        return new ImmutableArray(...items)
    }

    static from<T>(collection: Iterable<T>): ImmutableArray<T> {
        let arr = []
        for (const iterator of collection) {
            arr.push(iterator)
        }
        return new ImmutableArray(...arr)
    }

    push(...items: T[]): ImmutableArray<T> {
        return new ImmutableArray(...this._array, ...items)
    }

    pop(): ImmutableArray<T> {
        return new ImmutableArray(...this._array.slice(0, -1))
    }

    shift(): ImmutableArray<T> {
        return new ImmutableArray(...this._array.slice(1))
    }

    unshift(...items: T[]): ImmutableArray<T> {
        return new ImmutableArray(...items, ...this._array)
    }

    insert(index: number, ...items: T[]): ImmutableArray<T> {
        return new ImmutableArray(...this._array.slice(0, index - 1), ...items, ...this._array.slice(index))
    }

    update(index: number, ...items: T[]): ImmutableArray<T> {
        return new ImmutableArray(...this._array.splice(index, items.length, ...items))
    }

    remove(start: number, end = start): ImmutableArray<T> {
        return new ImmutableArray(...this._array.splice(start, end - start + 1))
    }

    reverse(): ImmutableArray<T> {
        return new ImmutableArray(...this._array.reverse())
    }

    join(separator?: string): string {
        return this._array.join(separator)
    }

    toMutable() {
        return this._array
    }

    toString() {
        return this._array.toString()
    }

    [Symbol.iterator](): Iterator<T> {
        return this._array[Symbol.iterator]()
    }

}
