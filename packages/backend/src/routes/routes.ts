import express, {Router} from 'express';
const router:Router = express.Router();

import {t9Controller} from "../controller/t9";
const t9 = t9Controller();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.get('/t9', t9.getWords);

export {
    router
};