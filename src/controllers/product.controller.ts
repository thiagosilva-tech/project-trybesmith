import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const serviceResponse = await productService.createProduct(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

async function findAll(req: Request, res: Response) {
  const serviceResponse = await productService.findAll();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  createProduct,
  findAll,
};