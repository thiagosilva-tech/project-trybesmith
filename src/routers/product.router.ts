import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateNameProduct from '../middleware/validateNameProduct';
import validatePriceProduct from '../middleware/validatePriceProduct';
import validateUserIdProduct from '../middleware/validateUserIdProduct';

const productRouter = Router();

productRouter
  .post(
    '/products', 
    validateUserIdProduct, 
    validateNameProduct, 
    validatePriceProduct,
    productController.createProduct,
  )
  .get('/products', productController.findAll);

export default productRouter;