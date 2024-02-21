import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const serviceResponse = await productService.createProduct(req.body);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  createProduct,
};