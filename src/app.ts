import express from 'express';
import productRouter from './routers/product.router';
import userRouter from './routers/user.router';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);

export default app;
