import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middleware/validateLogin';

const loginRouter = Router();

loginRouter
  .post('/login', validateLogin, loginController.login);

export default loginRouter;