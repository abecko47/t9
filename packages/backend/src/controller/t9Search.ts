import {T9NumberObject} from "../interface/T9NumberObject";

const product = require('cartesian-product');
const TrieSearch = require('trie-search');

import {WordObject} from '../interface/WordObject'

const numbers:T9NumberObject = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p','q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

const t9Search = (words:string[]) => {
    const trie = new TrieSearch();
    const wordObject:WordObject = {};
    words.map((word:string) => {
        wordObject[word] = word;
    });
    trie.addFromObject(wordObject);

    const predict = (prefix:string) => {
        const split:string[] = prefix.split('');
        const letters:object = split.map((c:any) => numbers[c]);
        const combos = product(letters);
        const predictions = combos.map((combo:string[]) => combo.join(''))
            .map((prefix:string) => {
                trie.get(prefix, {min: 5})
            })
            .filter((a:string) => a.length)[0];
        return predictions.map((prediction:any) => prediction.value);
    }

    return {
        predict
    }
}

export {
    t9Search
}