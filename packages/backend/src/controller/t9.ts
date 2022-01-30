import {Request, Response} from "express";
const words = require("an-array-of-english-words");
const T9Search = require('t9');
const t9 = new T9Search();
t9.setWords(words);

const t9Controller = () => {
    const getWords = (req:Request, res:Response) => {
        res.send({"foo": t9.predict('23')});
    }

    return {
        getWords
    }
}


export {
    t9Controller
}