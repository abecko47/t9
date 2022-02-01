import {Request, Response} from "express";
import {T9Request} from "../model/T9Request";
import {T9Response} from "../model/T9Response";
import {ErrorMessage} from "../model/ErrorMessage";

const words = require("an-array-of-english-words");

const T9Search = require('t9');
const t9 = new T9Search();
t9.setWords(words);

const t9Controller = () => {
    const predictWords = (req:Request, res:Response) => {
        let error:ErrorMessage = ErrorMessage.DEFAULT;
        try {
            const body:T9Request = req.body;

            if (!isNumbersValid(body.numbers)) {
                error = ErrorMessage.BAD_NUMBER;
                const response:T9Response = {data: null, error: error};
                res.send(response);
                return;
            }

            const predictedWords = t9.predict(body.numbers).slice(0, body.words);

            const response:T9Response = {data: predictedWords, error: null};
            res.send(response);
        } catch (e:any) {
            const response:T9Response = {data: null, error: error};
            res.send(response);
        }
    }

    const isNumbersValid = (numbers:string|null):boolean => {
        if (numbers === null) return false;
        return numbers.match(/[2-9]*/g)?.length === 2
    }

    return {
        predictWords
    }
}


export {
    t9Controller
}