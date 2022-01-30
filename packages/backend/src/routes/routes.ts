import express, {Router} from 'express';
const router:Router = express.Router();
import bodyParser from "body-parser";
import {t9Controller} from "../controller/t9Controller";

const t9 = t9Controller();
const jsonParser = bodyParser.json();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.post('/t9', jsonParser, t9.predictWords);

export {
    router
};