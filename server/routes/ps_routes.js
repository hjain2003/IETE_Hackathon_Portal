import express from 'express';
import {createPs, createTeam, getProblemStatementCountById } from '../controllers/ps_controller.js';

const psRouter = express.Router();

psRouter.post('/team/:psId',createTeam);
psRouter.post('/addPs',createPs);
psRouter.get('/getCount/:psId',getProblemStatementCountById);

export default psRouter;