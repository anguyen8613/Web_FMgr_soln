import { getPathPlanningFiles } from './../controllers/pathPlanningController';
import { Router } from 'express';

const pathPlanningRouter = Router();

pathPlanningRouter.get('/:ids', getPathPlanningFiles);

export default pathPlanningRouter;
