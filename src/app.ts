import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import ExampleRouter from './routes/example.route';

const app = express();
app.use(ExampleRouter);
app.use(errorHandler);

export default app;