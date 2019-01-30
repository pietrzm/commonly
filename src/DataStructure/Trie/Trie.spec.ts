import map from "Iterable/map/map"
import Trie from "./Trie"

describe("class Trie<T>", () => {
    context("Trie with no elements", () => {

        it("should be empty", () => {
            const trie = new Trie<number>()
            expect(trie.isEmpty()).toBeTruthy()
        })
        it("should have 0 elements", () => {
            const trie = new Trie<number>()
            expect(trie.size()).toEqual(0)
        })
        it("should return undefined on find()", () => {
            const trie = new Trie<number>()
            expect(trie.find("a")).toBeUndefined()
        })
        it("should not allow empty key", () => {
            const trie = new Trie<number>()
            expect(trie.add(0, "")).toBeFalsy()
            expect(trie.root.children).toEqual([])
        })
        it("should collapse to an empty array", () => {
            const trie = new Trie<number>()
            expect(trie.toArray()).toEqual([])
        })
        it("should have zero iteration steps", () => {
            const trie = new Trie<number>()
            let i = 0
            for(const x of trie) {
                i++
            }
            expect(i).toEqual(0)
        })
        it("should add element correctly", () => {
            const trie = new Trie<number>()
            expect(trie.add(20, "twenty")).toBeTruthy()
            expect(trie.root.children[0].keypart).toEqual("twenty")
            expect(trie.root.children[0].value).toEqual(20)
        })
        it("should be reducible", () => {
            const trie = new Trie<number>()
            const trie2: Trie<number> = map((entry) => ({value: entry.value() * 2, key: entry.key()}), trie)
            expect(trie2.toArray()).toEqual([])
        })
    })

    context("Trie with one element", () => {
        const given = () => {
            const trie = new Trie<number>()
            trie.add(1, "1")
            return trie
        }

        it("should not be empty", () => {
            const trie = given()
            expect(trie.isEmpty()).toBeFalsy()
        })
        it("should have 1 element", () => {
            const trie = given()
            expect(trie.size()).toEqual(1)
        })
        it("should find the element by key", () => {
            const trie = given()
            expect(trie.find("1")).toEqual(1)
        })
        it("should not allow duplicate keys", () => {
            const trie = given()
            expect(trie.add(11, "1")).toBeFalsy()
            expect(trie.root.children.length).toEqual(1)
            expect(trie.root.children[0].value).toEqual(1)
        })
        it("should collapse to an array with one element", () => {
            const trie = given()
            expect(trie.toArray()).toEqual([{key: "1", value: 1}])
        })
        it("should have one iteration step", () => {
            const trie = given()
            let i = 0
            for(const x of trie) {
                expect(x).toEqual({key: "1", value: 1})
                i++
            }
            expect(i).toEqual(1)
        })
        it("should be reducible", () => {
            const trie = given()
            const trie2: Trie<number> = map((entry) => ({value: entry.value * 2, key: entry.key}), trie)
            expect(trie2.toArray()).toEqual([{value: 2, key: "1"}])
        })
    })

    context("Trie with multiple elements", () => {
        const given = () => {
            const trie = new Trie<number>()
            trie.add(1, "Lorem ipsum")
            trie.add(2, "Lorem")
            trie.add(3, "Lorem ip")
            trie.add(4, "Lore")
            trie.add(5, "ip")
            trie.add(6, "ipsum")
            trie.add(7, "Lorem sum")
            trie.add(8, "Lorem ipdum")
            return trie
        }

        it("should have correct number of elements", () => {
            const trie = given()
            expect(trie.size()).toEqual(8)
        })
        it("should find nested element by key", () => {
            const trie = given()
            expect(trie.find("Lorem ipsum")).toEqual(1)
        })
        it("trie element should construct its own key", () => {
            const trie = given()
            expect(trie.root.find("Lorem ipsum").key()).toEqual("Lorem ipsum")
        })
        it("should have correct structure", () => {
            const trie = given()
            expect(trie.root.keypart).toEqual("")
            expect(trie.root.children.map((c) => c.keypart)).toEqual(["Lore", "ip"])
            expect(trie.root.find("ip").children.map((c) => c.keypart)).toEqual(["sum"])
            expect(trie.root.find("Lore").children.map((c) => c.keypart)).toEqual(["m"])
            expect(trie.root.find("Lorem").children.map((c) => c.keypart)).toEqual([" "])
            expect(trie.root.find("Lorem ").children.map((c) => c.keypart)).toEqual(["ip", "sum"])
            expect(trie.root.find("Lorem ip").children.map((c) => c.keypart)).toEqual(["sum", "dum"])
        })
        it("should collapse to array", () => {
            const trie = given()
            expect(trie.toArray().sort((a, b) => a.value - b.value)).toEqual([
                { key: "Lorem ipsum", value: 1 },
                { key: "Lorem", value: 2 },
                { key: "Lorem ip", value: 3 },
                { key: "Lore", value: 4 },
                { key: "ip", value: 5 },
                { key: "ipsum", value: 6 },
                { key: "Lorem sum", value: 7 },
                { key: "Lorem ipdum", value: 8 }
            ])
        })
        it("should iterate over all elements", () => {
            const trie = given()
            let i = 0
            let sum = 0
            for(const x of trie) {
                sum += x.value
                i++
            }
            expect(i).toEqual(8)
            expect(sum).toEqual(36)
        })
        it("should be reducible", () => {
            const trie = given()
            const trie2: Trie<number> = map((entry) => ({value: entry.value * 2, key: entry.key}), trie)
            expect(trie2.toArray().sort((a, b) => a.value - b.value)).toEqual([
                { key: "Lorem ipsum", value: 2 },
                { key: "Lorem", value: 4 },
                { key: "Lorem ip", value: 6 },
                { key: "Lore", value: 8 },
                { key: "ip", value: 10 },
                { key: "ipsum", value: 12 },
                { key: "Lorem sum", value: 14 },
                { key: "Lorem ipdum", value: 16 }
            ])
        })
        it("should construct array of values", () => {
            const trie = given()
            expect(trie.values().sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        })
        it("should collapse array of keys", () => {
            const trie = given()
            expect(trie.keys().sort((a, b) => a.localeCompare(b))).toEqual([
                "ip",
                "ipsum",
                "Lore",
                "Lorem",
                "Lorem ip",
                "Lorem ipdum",
                "Lorem ipsum",
                "Lorem sum"
            ])
        })
        it("should remove childless node", () => {
            const trie = given()
            expect(trie.remove("ipsum")).toBeTruthy()
            expect(trie.find("ipsum")).toBeUndefined()
            expect(trie.root.find("ip").children).toEqual([])
        })
        it("should collapse node with one child", () => {
            const trie = given()
            expect(trie.remove("Lorem")).toBeTruthy()
            expect(trie.find("Lorem")).toBeUndefined()
            expect(trie.root.find("Lore").children.map((c) => c.keypart)).toEqual(["m "])
        })
        it("should clear value of node with many children", () => {
            const trie = given()
            expect(trie.remove("Lorem ip")).toBeTruthy()
            expect(trie.find("Lorem ip")).toBeUndefined()
            expect(trie.root.find("Lorem ip").children.map((c) => c.keypart)).toEqual(["sum", "dum"])
        })
    })
})
