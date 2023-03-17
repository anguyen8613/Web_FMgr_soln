import { Router } from 'express';
import { getCustomer } from './../controllers/customerController';

const customerRouter = Router();
customerRouter.get('/:id', getCustomer);

export default customerRouter;
