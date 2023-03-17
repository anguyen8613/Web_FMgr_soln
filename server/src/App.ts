import express, { Application } from 'express';
import cadFileRouter from './routers/cadFileRouter';
import cors from 'cors';
import pathPlanningRouter from './routers/pathPlanningRouter';
import customerRouter from './routers/customerRouter';
import readFileRouter from './routers/readFileRouter';

const app: Application = express();

const PORT: number = 8080;

app.use(cors());
app.use(express.json());

app.use('/cadFiles', cadFileRouter);
app.use('/pathPlannings', pathPlanningRouter);
app.use('/customers', customerRouter)
app.use('/file', readFileRouter);

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
