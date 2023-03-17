import { Router } from 'express';
import { getCadFiles } from '../controllers/cadFileController';

const cadFileRouter = Router();

cadFileRouter.get('/:id', getCadFiles);

export default cadFileRouter;
