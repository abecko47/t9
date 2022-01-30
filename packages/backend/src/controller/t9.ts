import {Request, Response} from "express";

const t9Controller = () => {
    const getWords = (req:Request, res:Response) => {
        res.send({"foo": 1});
    }

    return {
        getWords
    }
}


export {
    t9Controller
}