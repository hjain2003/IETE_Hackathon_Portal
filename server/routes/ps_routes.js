import express from 'express';
import {createPs, createTeam, getAllProblemStatements, getProblemStatementCountById } from '../controllers/ps_controller.js';

const psRouter = express.Router();

psRouter.post('/team/:psId',createTeam);
psRouter.post('/addPs',createPs);
// psRouter.get('/getCount/:psId',getProblemStatementCountById);
psRouter.get('/problems', getAllProblemStatements);

export default psRouter;