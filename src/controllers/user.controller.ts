import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import userService from '../services/user.service';

async function findAll(req: Request, res: Response) {
  const serviceResponse = await userService.findAll();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  findAll,
};