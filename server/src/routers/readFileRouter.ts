import { readPartialFile } from './../controllers/readFileController';
import { Router } from 'express';

const readFileRouter = Router();
readFileRouter.post('/', readPartialFile);

export default readFileRouter;
