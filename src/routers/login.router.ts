import { Router } from 'express';
import loginController from '../controllers/login.controller';
import verifyInputLogin from '../middleware/verifyInputLogin';

const loginRouter = Router();

loginRouter
  .post('/login', verifyInputLogin, loginController.login);

export default loginRouter;