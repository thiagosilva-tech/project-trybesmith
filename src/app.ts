import express from 'express';
import productRouter from './routers/product.router';
import userRouter from './routers/user.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use(productRouter);
app.use(userRouter);

export default app;
