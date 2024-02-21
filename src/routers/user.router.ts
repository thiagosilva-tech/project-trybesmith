import { Router } from 'express';

import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter
  .get('/users', userController.findAll);

export default userRouter;