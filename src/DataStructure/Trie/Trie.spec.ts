import Trie from "./Trie"

describe('class Trie<T>', () => {
    context('Trie with no elements', () => {
        const trie = new Trie<Number>()

        it('should be empty', () => {
            expect(trie.isEmpty()).toBeTruthy()
        })
        it('should have 0 elements', () => {
            expect(trie.size()).toEqual(0)
        })
        it('should return undefined on find()', () => {
            expect(trie.find('a')).toBeUndefined()
        })
        it('should not allow empty key', () => {
            expect(trie.add(0, '')).toBeFalsy()
            expect(trie.root.children).toEqual([])
        })
        it('should collapse to an empty array', () => {
            expect(trie.toArray()).toEqual([])
        })
        it('should have zero iteration steps', () => {
            let i = 0
            for(let x of trie) {
                i++
            }
            expect(i).toEqual(0)
        })
        it('should add element correcly', () => {
            expect(trie.add(20, 'twenty')).toBeTruthy()
            expect(trie.root.children[0].keypart).toEqual('twenty')
            expect(trie.root.children[0].value).toEqual(20)
        })
    })

    context('Trie with one element', () => {
        const trie = new Trie<Number>()
        trie.add(1, '1')

        it('should not be empty', () => {
            expect(trie.isEmpty()).toBeFalsy()
        })
        it('should have 1 element', () => {
            expect(trie.size()).toEqual(1)
        })
        it('should find the element by key', () => {
            expect(trie.find('1')).toEqual(1)
        })
        it('should not allow duplicate keys', () => {
            expect(trie.add(11, '1')).toBeFalsy()
            expect(trie.root.children.length).toEqual(1)
            expect(trie.root.children[0].value).toEqual(1)
        })
        it('should collapse to an array with one element', () => {
            expect(trie.toArray()).toEqual([{key: '1', value: 1}])
        })
        it('should have one iteration step', () => {
            let i = 0
            for(let x of trie) {
                expect(x).toEqual({key: '1', value: 1})
                i++
            }
            expect(i).toEqual(1)
        })
    })

    context('Trie with multiple elements', () => {
        const trie = new Trie<Number>()
        trie.add(1, 'Lorem ipsum')
        trie.add(2, 'Lorem')
        trie.add(3, 'Lorem ip')
        trie.add(4, 'Lore')
        trie.add(5, 'ip')
        trie.add(6, 'ipsum')
        trie.add(7, 'Lorem sum')
        trie.add(8, 'Lorem ipdum')

        it('should have correct number of elements', () => {
            expect(trie.size()).toEqual(8)
        })
        it('should find nested element by key', () => {
            expect(trie.find('Lorem ipsum')).toEqual(1)
        })
        it('trie element should construct its own key', () => {
            expect(trie.root.find('Lorem ipsum').key()).toEqual('Lorem ipsum')
        })
        it('should have correct structure', () => {
            expect(trie.root.keypart).toEqual('')
            expect(trie.root.children.map(c => c.keypart)).toEqual(['Lore', 'ip'])
            expect(trie.root.find('ip').children.map(c => c.keypart)).toEqual(['sum'])
            expect(trie.root.find('Lore').children.map(c => c.keypart)).toEqual(['m'])
            expect(trie.root.find('Lorem').children.map(c => c.keypart)).toEqual([' '])
            expect(trie.root.find('Lorem ').children.map(c => c.keypart)).toEqual(['ip', 'sum'])
            expect(trie.root.find('Lorem ip').children.map(c => c.keypart)).toEqual(['sum', 'dum'])
        })
        it('should collapse to array', () => {
            expect(trie.toArray().sort((a, b) => a.value.valueOf() - b.value.valueOf())).toEqual([
                { key: 'Lorem ipsum', value: 1 },
                { key: 'Lorem', value: 2 },
                { key: 'Lorem ip', value: 3 },
                { key: 'Lore', value: 4 },
                { key: 'ip', value: 5 },
                { key: 'ipsum', value: 6 },
                { key: 'Lorem sum', value: 7 },
                { key: 'Lorem ipdum', value: 8 }
            ])
        })
        it('should iterate over all elements', () => {
            let i = 0
            let sum = 0
            for(let x of trie) {
                sum += x.value.valueOf()
                i++
            }
            expect(i).toEqual(8)
            expect(sum).toEqual(36)
        })
        it('should construct array of values', () => {
            expect(trie.values().sort((a, b) => a.valueOf() - b.valueOf())).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        })
        it('should collapse array of keys', () => {
            expect(trie.keys().sort((a, b) => a.localeCompare(b))).toEqual([
                'ip',
                'ipsum',
                'Lore',
                'Lorem',
                'Lorem ip',
                'Lorem ipdum',
                'Lorem ipsum',
                'Lorem sum'
            ])
        })
        it('should remove childless node', () => {
            expect(trie.remove('ipsum')).toBeTruthy()
            expect(trie.find('ipsum')).toBeUndefined()
            expect(trie.root.find('ip').children).toEqual([])
        })
        it('should collapse node with one child', () => {
            expect(trie.remove('Lorem')).toBeTruthy()
            expect(trie.find('Lorem')).toBeUndefined()
            expect(trie.root.find('Lore').children.map(c => c.keypart)).toEqual(['m '])
        })
        it('should clear value of node with many children', () => {
            expect(trie.remove('Lorem ip')).toBeTruthy()
            expect(trie.find('Lorem ip')).toBeUndefined()
            expect(trie.root.find('Lorem ip').children.map(c => c.keypart)).toEqual(['sum', 'dum'])
        })
    })
})