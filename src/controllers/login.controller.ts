import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const serviceResponse = await loginService.verifyLogin(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  login,
};