import express from 'express';
import {getBook} from '../controlar/bookcontrolar.js';

const router = express.Router();

router.get("/", getBook)

export default router;